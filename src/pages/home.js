import {Link} from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RepetitionDatesContext } from '../contexts/repetition-dates-context';
import { Button, Badge } from "@material-tailwind/react";
import Month from '../components/Month';
import { GetAllTensesService } from '../services/conjugationService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Home (){

    const {repetitionDates, setRepetitionDates} = useContext(RepetitionDatesContext);

    

    /* useEffect(() => {
        if (tenseList) {
            console.log(tenseList);
        }
    }, [tenseList]);  // Cette ligne s'assure que le useEffect s'exécute chaque fois que tenseList change */


    return(
        <>
            {/* <div>
                {tenseList ? tenseList.map(tense => (
                    <div key={tense.id}>{tense.name}</div>
                )) : <p>Loading tenses...</p>}
            </div> */}
            {
                repetitionDates.length > 0 
                ? repetitionDates.map((month, index) => 
                    <Month key={index} month={month}/>
                )
                : <div>None</div>
            }

            {/* <Button className='' onClick={() => setRepetitionDates([])}>test</Button> */}
            <div className="mt-20 items-center flex flex-col gap-5">
                
                <div className='badge-button w-1/2'>

                    <Badge color="red" content='5'>
                        <Link to="/summary" className='w-full'>
                            <Button className='w-full'>Start today repetition(s)</Button>
                        </Link>
                    </Badge>

                </div>
                
            </div>

            <Link to="/new-set" className='fixed right-1/2 translate-x-1/2 bottom-24'>
                <Button className='w-14 h-14'>
                    <FontAwesomeIcon icon={faPlus} className=''/>
                </Button>
            </Link>
            
        </>
    )
}