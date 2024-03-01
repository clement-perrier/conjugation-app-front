import conjugationGridsData from '../data/conjugation-grids.json'
import verbsData from '../data/verbs.json';
import conjugationsData from '../data/conjugations.json';
import pronounsData from '../data/pronouns.json';


export function ConjugationService(){

    function GetConjugationGrids(){

        const conjugationGridList =  [];

        conjugationGridsData.forEach(conjugationGrid => {

            const verb = GetVerb(conjugationGrid.verb);

            const filteredConjugationsData = GetConjugationsByGrid(conjugationGrid.id);
        
            const conjugations = TransformConjugations(filteredConjugationsData);
        
            conjugationGridList.push({
              verb: verb,
              conjugations: conjugations
            })
        
          })

          return conjugationGridList;
    }
    
    function GetVerb(id){
        return verbsData.find(verb => verb.id === id).name;
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
              pronoun: pronoun,
              conjugatedVerb: conugatedVerb
            })
      
          })

          return newConjugation;
    }

    return {
        GetConjugationGrids: GetConjugationGrids
    }
    
}