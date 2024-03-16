import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { RepetitionDatesContext } from '../contexts/repetition-dates-context';

export default function Home (){
    
    const {repetitionDates, setRepetitionDates} = useContext(RepetitionDatesContext);

    const repetitionDateElements = repetitionDates.length > 0 
    ? repetitionDates.map(repetitionDate => (
        <li key={repetitionDate.id}>
            {repetitionDate.date}
        </li>
    ))
    : <div>None</div>;

    return(
        <>
            {repetitionDateElements}
            <button className="btn btn-blue" onClick={() => setRepetitionDates([])}>test</button>
            <Link to="/summary">
                <button className='btn btn-blue'>Start</button>
            </Link>
        </>
    )
}