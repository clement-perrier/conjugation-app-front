import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/home-button';

export default function Summary () {

    return (
        <>
            <HomeButton/>
            <h2>Let's learn the present of the three most used verbs in Spanish:</h2>
            <div>
                <ConjugationTable 
                    verb='Ir' 
                    conjugations={['voy','vas','va','vamos','van']}
                />
                <ConjugationTable 
                    verb='Tener' 
                    conjugations={['tengo','tienes','tiene','tenemos','tienen']}
                />
                <ConjugationTable 
                    verb='Ser' 
                    conjugations={['soy','eres','es','somos','son']}
                />
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