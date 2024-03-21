import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { RepetitionDatesContext } from '../contexts/repetition-dates-context';
import { Button, Badge } from "@material-tailwind/react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  
export default function Home (){

    const {repetitionDates, setRepetitionDates} = useContext(RepetitionDatesContext);

    return(
        <>
            {
                repetitionDates.length > 0 
                ? repetitionDates.map((month, index) => 
                    <Month key={index} month={month}/>
                )
                : <div>None</div>
            }

            {/* <Button className='' onClick={() => setRepetitionDates([])}>test</Button> */}
            <div className="text-center">
                <Badge color="red" content='5'>
                    <Link to="/summary">
                        <Button>Start Today Repetition(s)</Button>
                    </Link>
                </Badge>
            </div>
        </>
    )
}

export function Month({month}) {

    return (
        <div className='mb-8'>
            <p className='text-xl font-semibold text-center'>{month.month}</p>
            {
                month.days.map((day,index) =>
                    <Day key={index} day={day}/>
                )
            }
        </div>
    )
    
}

export function Day({day}) {

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader className='text-lg font-medium' onClick={() => handleOpen(1)}>{day.day}</AccordionHeader>
                <AccordionBody>
                {    
                    day.batches.map((batch,index) =>
                        <Batch key={index} batch={batch}/>
                    )
                }
                </AccordionBody>
            </Accordion>
        </>
    )
    
}

export function Batch({batch}) {

    return (
        <div className='mb-4'>
            <p className='text-base font-medium'>Day {batch.day_number}</p>
            {
                batch.conjugationGrids.map((conjugationGrid,index) =>
                    <ConjugationGrid key={index} conjugationGrid={conjugationGrid}/>
                )
            }
        </div>
    )
    
}

export function ConjugationGrid({conjugationGrid}) {

    return (
        <>
            <p className='text-base uppercase'>
                {conjugationGrid.verb}
                <span className="lowercase"> in </span>
                {conjugationGrid.tense}
            </p>
        </>
    )
    
}