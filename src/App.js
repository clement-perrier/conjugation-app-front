import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Summary from './pages/Summary/summary';
import { useState } from 'react';
import {ConjugationGridListContext} from './contexts/conjugation-grid-list-context';
import { ConjugationService } from './services/conjugation-services';
import Training from './pages/Training/training';

export default function App() {

  const conjugationService = ConjugationService();

  const initialConjugationGridList = conjugationService.GetConjugationGrids();

  const [conjugationGridList, setConjugationGridList] = useState(initialConjugationGridList);

  console.log();

  return (
    <div className="App">
      <ConjugationGridListContext.Provider value={conjugationGridList}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/summary" element={<Summary />}></Route>
          <Route path="/training" element={<Training />}></Route>
        </Routes>
      </ConjugationGridListContext.Provider>
    </div>
  );
}


