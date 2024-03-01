import { useState } from "react";

export default function ConjugationGrid() {
  
    const [verb, setVerb] = useState('');

    return {
        setVerb: setVerb,
        verb: verb
    }

}