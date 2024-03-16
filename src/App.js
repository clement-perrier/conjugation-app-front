import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Summary from './pages/summary';
import Training from './pages/training';
import { useState } from 'react';
import {ConjugationGridListContext} from './contexts/conjugation-grid-list-context';
import { RepetitionDatesContext } from './contexts/repetition-dates-context';
import { ConjugationService } from './services/conjugation-services';

export default function App() {

  const conjugationService = ConjugationService();

  const initialConjugationGridList = conjugationService.GetConjugationGrids();
  
  const [conjugationGridList, setConjugationGridList] = useState(initialConjugationGridList);
  
  const initialRepetitionDates = conjugationService.GetRepetitionDates();
  
  const [repetitionDates, setRepetitionDates] = useState(initialRepetitionDates);

  return (
    <div className="App">
      <RepetitionDatesContext.Provider value={{repetitionDates, setRepetitionDates}}>
        <ConjugationGridListContext.Provider value={conjugationGridList}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/summary" element={<Summary />}></Route>
            <Route path="/training" element={<Training />}></Route>
          </Routes>
        </ConjugationGridListContext.Provider>
      </RepetitionDatesContext.Provider>
    </div>
  );
}


