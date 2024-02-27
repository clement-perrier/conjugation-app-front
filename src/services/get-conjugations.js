import { useEffect, useState } from "react";
import {conjugations} from '../data/conjugations.json'
export function GetConjugations(){
    const [conjugations, setConjugations]= useState([]);
    useEffect(()=> {
        fetch('../data/conjugations.json')
            .then((res) => res.json())
            .then((data)=>{
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])
}