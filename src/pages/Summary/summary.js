import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/home-button';
import conjugationGridsData from '../../data/conjugation-grids.json'
import verbsData from '../../data/verbs.json';
import conjugationsData from '../../data/conjugations.json';
import pronounsData from '../../data/pronouns.json';

export default function Summary () {

    // const conjugations = conjugationsData.present;

   /*  const conjugationService = ConjugationService();
    const conjugationGridsData = conjugationService.GetConjugationGrids();Data
    console.log(conjugationGrids); */

    /* const element = conjugationGrids.map(grid =>Data
        <div>
            {grid.verb}
            {<ConjugationTable 
                verb={grid.verb} 
                conjugations={grid.conjugations}
            />}
        </div>
    ) */

    return (
        <>
            <HomeButton/>
            <h2>Let's learn the present of the three most used verbsData in Spanish:</h2>
            {
                conjugationGridsData.map(grid =>
                    <ConjugationGrid 
                        key={grid.id}
                        verbId={grid.verb} 
                        conjugationGridId={grid.id}
                    />
                )
            }
            <Link to='/'>
                <button>Start training</button>
            </Link>
        </>
    );

}

function ConjugationGrid({verbId, conjugationGridId}){

    const verb = verbsData.find(verb => verb.id === verbId);
    const conjugations = conjugationsData.filter(conjugation => conjugation.conjugation_grid === conjugationGridId)

    return (
        <table>
            <thead>
                <tr>
                    <th>{verb.name}</th>
                </tr>
            </thead>
            <tbody>
                {
                    conjugations.map(conjugation => 
                        <Conjugation key={conjugation.id} pronounId={conjugation.pronoun} conjugatedVerb={conjugation.name} />
                    )
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

function Conjugation ({pronounId, conjugatedVerb}){
    const pronoun = pronounsData.find(pronoun => pronoun.id === pronounId);
    return (
        <tr>
            <td>{pronoun.name} {conjugatedVerb}</td>
        </tr>
    )
}