import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/home-button';
import { ConjugationService } from '../../services/conjugation-services';


export default function Summary () {

    // const conjugations = conjugationsData.present;

    const conjugationService = ConjugationService();
    const conjugationGrids = conjugationService.GetConjugationGrid();

    return (
        <>
            <HomeButton/>
            <h2>Let's learn the present of the three most used verbs in Spanish:</h2>
            <div>
                {/* {
                    conjugations.map(conjugation => 
                        <ConjugationTable 
                            verb={conjugation.verb} 
                            conjugations={conjugation.conjugations}
                        />
                    )
                } */}
            </div>
            <Link to='/'>
                <button>Start training</button>
            </Link>
        </>
    );

}

function ConjugationTable({verb, conjugations}){

    return (
        <table>
            <thead>
                <tr>
                    <th>{verb}</th>
                </tr>
            </thead>
            <tbody>
                {
                    conjugations.map(conjugation => 
                        <tr key={conjugation}>
                            <td>{conjugation}</td>
                        </tr>
                    )
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}