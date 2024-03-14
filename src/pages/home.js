import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { RepetitionBatchListContext } from '../contexts/repetition-batch-list-context';

export default function Home (){
    
    const {repetitionBatchList, setRepetitionBatchList} = useContext(RepetitionBatchListContext);

    const repetitionBatchListElements = repetitionBatchList.length > 0 
    ? repetitionBatchList.map(repetitionBatch => (
        <li key={repetitionBatch.id}>
            {repetitionBatch.date}
        </li>
    ))
    : <div>None</div>;

    return(
        <>
            {repetitionBatchListElements}
            <button className="btn btn-blue" onClick={() => setRepetitionBatchList([])}>test</button>
            <Link to="/summary">
                <button className='btn btn-blue'>Start</button>
            </Link>
        </>
    )
}