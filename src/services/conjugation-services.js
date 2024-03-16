import conjugationGridsData from '../data/conjugation-grids.js'
import verbsData from '../data/verbs.json';
import tensesData from '../data/tenses.json';
import conjugationsData from '../data/conjugations.json';
import pronounsData from '../data/pronouns.json';
import ShuffleArray from '../utils/shuffle';
import repetitionBatchesData from '../data/repetition-batches.js';

export function ConjugationService(){

    function GetRepetitionDates(){

        const conjugationGrids = GetConjugationGrids();

        const offset = (new Date()).getTimezoneOffset() * 60000;

        const todayDate = (new Date(Date.now() - offset));
        
        const tomorrowDate = new Date(todayDate);
        tomorrowDate.setDate(todayDate.getDate() + 1);

        const today = todayDate.toISOString().split('T')[0];
        const tomorrow = tomorrowDate.toISOString().split('T')[0]; 

        const repetitionBatches = repetitionBatchesData.map(repetitionBatch => {
            if (new Date(repetitionBatch.date - offset).getMonth() === todayDate.getMonth()){
                repetitionBatch.month = 'This month';
            } else {
                repetitionBatch.month = new Date(repetitionBatch.date + " 00:00:00").toLocaleString('default', { month: 'long' });
            }
            switch (repetitionBatch.date) {
                case today:
                    repetitionBatch.day = 'Today';
                    break;
                case tomorrow:
                    repetitionBatch.day = 'Tomorrow';
                    break;
                default:
                    const day = new Date(repetitionBatch.date + " 00:00:00").toLocaleString('default', { weekday: 'long', day:  'numeric'});
                    const daySplitted = day.split(' ');
                    const figure = daySplitted[0][1] >= 0 ? daySplitted[0][1] : daySplitted[0];
                    let ordinalIndicator = 'th';
                    switch (figure){
                        case '1':
                            ordinalIndicator = 'st';
                            break
                        case '2':
                            ordinalIndicator = 'nd';
                            break;
                        case '3':
                            ordinalIndicator = 'rd';
                            break;
                        default:
                    }
                    repetitionBatch.day = daySplitted[1] + ' ' + daySplitted[0] + ordinalIndicator ;
                    break;
            }
            repetitionBatch.conjugationGrids = 
                conjugationGrids.filter(conjugationGrid => conjugationGrid.batch === repetitionBatch.id)
            return repetitionBatch;
        })

        const repetitionBatchesByDays = [];
        Object.entries(Object.groupBy(repetitionBatches, ({date}) => date)).forEach(repetitionsByDay => {
            repetitionBatchesByDays.push({
                day: repetitionsByDay[0],
                batches: repetitionsByDay[1],
                month: new Date(repetitionsByDay[0] + " 00:00:00").toLocaleString('default', { month: 'long' })
            })
        })

        const repetitionBatchesByMonths = [];
        Object.entries(Object.groupBy(repetitionBatchesByDays, ({month}) => month)).forEach(repetitionsByMonth => {
            repetitionBatchesByMonths.push({
                month: repetitionsByMonth[0],
                days: repetitionsByMonth[1]
            })
        })

        return repetitionBatchesByMonths;
    }

    function GetConjugationGrids(){

        const conjugationGridList =  [];

        conjugationGridsData.forEach(conjugationGrid => {

            const verb = GetVerb(conjugationGrid.verb);

            const filteredConjugationsData = GetConjugationsByGrid(conjugationGrid.id);
        
            const conjugations = TransformConjugations(filteredConjugationsData);
        
            conjugationGridList.push({
              id: conjugationGrid.id,
              batch: conjugationGrid.batch,
              verb: verb,
              conjugations: conjugations
            })
        
          })

          return conjugationGridList;
    }

    function GetQuestions(){
        let questions = [];
        conjugationGridsData.forEach(grid => {
            const verb = GetVerb(grid.verb);
            const tense = GetTense(grid.tense);
            const conjugations = GetConjugationsByGrid(grid.id);
            conjugations.forEach(conjugation => {
                const pronoun = GetPronoun(conjugation.pronoun);
                questions.push({
                    id: conjugation.id,
                    tense: tense,
                    verb: verb,
                    pronoun: pronoun,
                    answer: conjugation.name,
                    givenAnswer: ''
                })
            })
        });
        return ShuffleArray(questions);
    }
    
    function GetVerb(id){
        return verbsData.find(verb => verb.id === id).name;
    }

    function GetTense(id){
        return tensesData.find(tense => tense.id === id).name;
    }

    function GetPronoun(id){
        return pronounsData.find(pronoun => pronoun.id === id).name;
    }

    function GetConjugationsByGrid(id){
        return conjugationsData.filter(conjugation => conjugation.conjugation_grid === id);
    }
    
    function TransformConjugations(conjugations){

        const newConjugation = [];

        conjugations.forEach(conjugation => {
        
            const pronoun = GetPronoun(conjugation.pronoun);
            const conugatedVerb = conjugation.name;
      
            newConjugation.push({
              id: conjugation.id,
              pronoun: pronoun,
              conjugatedVerb: conugatedVerb
            })
      
          })

          return newConjugation;
    }

    return {
        GetConjugationGrids: GetConjugationGrids,
        GetQuestions: GetQuestions,
        GetRepetitionDates: GetRepetitionDates
    }
    
}