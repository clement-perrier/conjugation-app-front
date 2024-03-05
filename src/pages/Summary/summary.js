import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/home-button';
import conjugationGridsData from '../../data/conjugation-grids.json'
import verbsData from '../../data/verbs.json';
import conjugationsData from '../../data/conjugations.json';
import pronounsData from '../../data/pronouns.json';
import { useContext } from 'react';
import {ConjugationGridListContext} from '../../contexts/conjugation-grid-list-context';

export default function Summary () {

    const conjugationGridList = useContext(ConjugationGridListContext);

    return (
        <>
            <HomeButton/>
            <h2>Let's learn the present of the three most used verbsData in Spanish:</h2>
            {
                conjugationGridList.map(grid =>
                    <ConjugationGrid 
                        key={grid.id}
                        grid={grid}
                    />
                )
            }
            <Link to='/'>
                <button>Start training</button>
            </Link>
        </>
    );

}

function ConjugationGrid({grid}){

    return (
        <table>
            <thead>
                <tr>
                    <th>{grid.verb}</th>
                </tr>
            </thead>
            <tbody>
                {
                    grid.conjugations.map(conjugation => 
                        <Conjugation key={conjugation.id} conjugation={conjugation} />
                    )
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

function Conjugation ({conjugation}){
    return (
        <tr>
            <td>{conjugation.pronoun} {conjugation.conjugatedVerb}</td>
        </tr>
    )
}