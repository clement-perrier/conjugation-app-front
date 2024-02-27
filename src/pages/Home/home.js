import {Link} from 'react-router-dom';

export default function Home (){
    return(
        <>
            <h1>Welcome to the Conjugation Apps</h1>
            <Link to="/summary">
                <button>Start</button>
            </Link>
        </>
    )
}