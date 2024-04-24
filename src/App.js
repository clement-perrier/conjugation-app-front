import './App.css';
import { useState } from 'react';
import { ConjugationGridListContext } from './contexts/conjugation-grid-list-context';
import { RepetitionDatesContext } from './contexts/repetition-dates-context';
import { ConjugationService } from './services/conjugationService';
import { ThemeProvider } from '@material-tailwind/react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/summary';
import Training from './pages/training';
import SetMode from './pages/new-set/SetMode';
import PreSet from './pages/new-set/PreSetSelection';
import TenseSelection from './pages/new-set/custom-set/TenseSelection';
import VerbSelection from './pages/new-set/custom-set/VerbSelection';
import SetProgress from './pages/new-set/custom-set/SetProgress';

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
              <Route path="/new-set" element={<SetMode />}></Route>
              <Route path="/new-set/pre-set-selection" element={<PreSet />}></Route>
              <Route path="/new-set/custom-set/tense-selection" element={<TenseSelection />}></Route>
              <Route path="/new-set/custom-set/verb-selection" element={<VerbSelection />}></Route>
              <Route path="/new-set/custom-set/set-progress" element={<SetProgress />}></Route>
            </Routes>
          </ConjugationGridListContext.Provider>
        </RepetitionDatesContext.Provider>
      </ThemeProvider>
    </div>
  );
}


