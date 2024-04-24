import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/summary';
import Training from './pages/training';
import { useState, useEffect } from 'react';
import {ConjugationGridListContext} from './contexts/conjugation-grid-list-context';
import { RepetitionDatesContext } from './contexts/repetition-dates-context';
import { ConjugationService } from './services/conjugationService';
import { ThemeProvider } from '@material-tailwind/react';

export default function App() {

  const conjugationService = ConjugationService();

  const initialConjugationGridList = conjugationService.GetConjugationGrids();
  
  const [conjugationGridList, setConjugationGridList] = useState(initialConjugationGridList);
  
  const initialRepetitionDates = conjugationService.GetRepetitionDates();
  
  const [repetitionDates, setRepetitionDates] = useState(initialRepetitionDates);

  /* useEffect(() => {
    fetch('http://localhost:8080/greeting?name=Clement')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []); */

  return (
    <div className="App">
      <ThemeProvider>
        <RepetitionDatesContext.Provider value={{repetitionDates, setRepetitionDates}}>
          <ConjugationGridListContext.Provider value={conjugationGridList}>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/summary" element={<Summary />}></Route>
              <Route path="/training" element={<Training />}></Route>
            </Routes>
          </ConjugationGridListContext.Provider>
        </RepetitionDatesContext.Provider>
      </ThemeProvider>
    </div>
  );
}


