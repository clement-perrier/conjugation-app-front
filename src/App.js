import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home/home';
import Summary from './pages/Summary/summary';
import {GetConjugations} from './services/get-conjugations';

function App() {
  GetConjugations();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/summary" element={<Summary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
