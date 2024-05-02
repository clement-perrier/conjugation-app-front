import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function VerbSelection(){

    const selectedTense = useSelector(state => state.selectedTense.value)

    useEffect(()  => {
        console.log(selectedTense);
    }, [selectedTense]);

    return (
        <>
        </>
    )
    
}