import verbs from '../data/verbs.json';
import tenses from '../data/tenses.json';
import pronouns from '../data/pronouns.json';
import conjugationsGrid from '../data/conjugation-grids.json';
import conjugations from '../data/conjugations.json';

export function ConjugationService(){

    
    function GetConjugationGrid(){
        const test = conjugations;
        console.log(test);
        return test;
    }

    return {
        GetConjugationGrid: GetConjugationGrid
    }
    
}
