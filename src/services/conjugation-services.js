import conjugationGridsData from '../data/conjugation-grids.js'
import verbsData from '../data/verbs.json';
import tensesData from '../data/tenses.json';
import conjugationsData from '../data/conjugations.json';
import pronounsData from '../data/pronouns.json';
import ShuffleArray from '../utils/shuffle';
import repetitionBatchesData from '../data/repetition-batches.js';

export function ConjugationService(){

    function GetRepetitionBatchList(){
        return repetitionBatchesData;
        /* repetitionBatchesData.forEach(repetitionBatch => {

        }) */
    }

    function GetConjugationGrids(){

        const conjugationGridList =  [];

        conjugationGridsData.forEach(conjugationGrid => {

            const verb = GetVerb(conjugationGrid.verb);

            const filteredConjugationsData = GetConjugationsByGrid(conjugationGrid.id);
        
            const conjugations = TransformConjugations(filteredConjugationsData);
        
            conjugationGridList.push({
              id: conjugationGrid.id,
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
        GetRepetitionBatchList: GetRepetitionBatchList
    }
    
}