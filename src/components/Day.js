import { useState } from "react";
import RepetitionBatch from "./RepetitionBatch";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";

export default function Day({day}) {

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1}>
                <AccordionHeader className='text-lg font-medium' onClick={() => handleOpen(1)}>{day.day}</AccordionHeader>
                <AccordionBody>
                {    
                    day.batches.map((batch,index) =>
                        <RepetitionBatch key={index} batch={batch}/>
                    )
                }
                </AccordionBody>
            </Accordion>
        </>
    )
    
}