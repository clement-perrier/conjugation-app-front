/* import conjugationGridsData from '../data/conjugation-grids.js'
import verbsData from '../data/verbs.json';
import tensesData from '../data/tenses.json';
import conjugationsData from '../data/conjugations.json';
import pronounsData from '../data/pronouns.json';
import ShuffleArray from '../utils/shuffle.js';
import repetitionBatchesData from '../data/repetition-batches.js';

import { FetchAllTenses } from './apiService.js';

    export async function GetAllTensesService(){
        try {
            const result = await FetchAllTenses();
            return result.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    export function ConjugationService(){

        function GetRepetitionDates(){

            const conjugationGrids = GetConjugationGrids();

            const offset = (new Date()).getTimezoneOffset() * 60000;
            const todayDate = (new Date(Date.now() - offset));

            const repetitionBatches = repetitionBatchesData.map(repetitionBatch => {
                const batchDate = new Date(new Date (repetitionBatch.date).getTime() + offset);
                repetitionBatch.month = batchDate.getMonth() === todayDate.getMonth() ? 'This month' : batchDate.toLocaleString('default', { month: 'long' });

                if(batchDate.getDate() === todayDate.getDate()){
                    repetitionBatch.day = 'Today';
                } else if (batchDate.getDate() - todayDate.getDate() === 1){
                    repetitionBatch.day = 'Tomorrow';
                } else {
                    const dayFormatted = batchDate.toLocaleString('default', { weekday: 'long', day: 'numeric' });
                    const dayFormattedSplitted = dayFormatted.split(' ');
                    const dayNumber = dayFormattedSplitted[0];
                    let ordinal = 'th';
                    if (dayNumber <= 3 || dayNumber >= 21) {
                        switch (dayNumber % 10) {
                            case 1:  ordinal="st"; break;
                            case 2:  ordinal= "nd"; break;
                            case 3:  ordinal= "rd"; break;
                            default: ordinal= "th";
                        }
                    } 
                    repetitionBatch.day = `${dayFormattedSplitted[1]} ${dayNumber}${ordinal}`;
                    const day = `${dayFormattedSplitted[1]} ${dayNumber}${ordinal}`;
                    console.log();
                }

                repetitionBatch.conjugationGrids = conjugationGrids.filter(conjugationGrid => conjugationGrid.batch === repetitionBatch.id);

                return repetitionBatch;
            })

            repetitionBatches.sort((a, b) => new Date(a.date) - new Date(b.date));

            const repetitionBatchesByMonths = Object.entries(Object.groupBy(repetitionBatches, ({ month }) => month)).map(([month, batchesByMonth]) => ({
                month, // Convert month string to number
                days: Object.entries(Object.groupBy(batchesByMonth, ({ day }) => day)).map(([day, batchesByDay]) => ({
                    day, // Convert day string to number
                    batches: batchesByDay,
                })),
            }));


            return repetitionBatchesByMonths;
        }

        function GetConjugationGrids(){

            const conjugationGridList =  [];

            conjugationGridsData.forEach(conjugationGrid => {

                const filteredConjugationsData = GetConjugationsByGrid(conjugationGrid.id);
                
                conjugationGridList.push({
                id: conjugationGrid.id,
                batch: conjugationGrid.batch,
                verb: GetVerb(conjugationGrid.verb),
                tense: GetTense(conjugationGrid.tense),
                conjugations: TransformConjugations(filteredConjugationsData)
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

    } */