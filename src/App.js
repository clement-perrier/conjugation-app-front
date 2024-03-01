import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home/home';
import Summary from './pages/Summary/summary';
import { useState } from 'react';
import conjugationGridsData from './data/conjugation-grids.json'
import verbsData from './data/verbs.json';
import conjugationsData from './data/conjugations.json';
import pronounsData from './data/pronouns.json';
import { ConjugationService } from './services/conjugation-services';

export default function App() {

  const conjugationService = ConjugationService();

  const initialConjugationGridList = conjugationService.GetConjugationGrids();

  /* const initialConjugationGridList =  [];

  conjugationGridsData.forEach(conjugationGrid => {

    const verb = verbsData.find(verb => verb.id === conjugationGrid.verb).name;
    const filteredConjugationsData = conjugationsData.filter(conjugation => conjugation.conjugation_grid === conjugationGrid.id);

    const conjugations = [];

    filteredConjugationsData.forEach(filteredConjugation => {

      const pronoun = pronounsData.find(pronoun => pronoun.id === filteredConjugation.pronoun).name;
      const conugatedVerb = filteredConjugation.name;

      conjugations.push({
        pronoun: pronoun,
        conjugatedVerb: conugatedVerb
      })

    })

    initialConjugationGridList.push({
      verb: verb,
      conjugations: conjugations
    })

  }) */

  const [conjugationGridList, setConjugationGridList] = useState(initialConjugationGridList);

  console.log();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/summary" element={<Summary />}></Route>
      </Routes>
    </div>
  );
}


