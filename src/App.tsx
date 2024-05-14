import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Summary from "./pages/summary";
import Training from "./pages/training";
import PreSet from "./pages/new-set/PreSetSelection";
import TenseSelection from "./pages/new-set/custom-set/TenseSelection";
import VerbSelection from "./pages/new-set/custom-set/VerbSelection";
import SetProgress from "./pages/new-set/custom-set/SetProgress";
import NewSet from "./pages/new-set/NewSet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenses, fetchVerbs } from "./services/apiService";
import { AppDispatch } from "redux/store";
import menuItems from "data/menuItems";
import Button from "components/Button";

export default function App() {

  const dispatch = useDispatch<AppDispatch>();
  // const verbs = useSelector(state => state.verbList.data)

  useEffect(() => {
    // initiateTenseList();
    dispatch(fetchTenses());
    dispatch(fetchVerbs());
  }, []);

  /*   useEffect(() => {
    // initiateTenseList();
    console.log(verbs); 
  }, [verbs]); */

  /* useEffect(() => {
    fetch('http://localhost:8080/greeting?name=Clement')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []); */

  return (
    <div className="App h-full flex">
      <div className="px-5 pt-5 pb-20 h-full flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/new-set" element={<NewSet />}></Route>
          <Route
            path="/new-set/pre-set-selection"
            element={<PreSet />}
          ></Route>
          <Route
            path="/new-set/custom-set/tense-selection"
            element={<TenseSelection />}
          ></Route>
          <Route
            path="/new-set/custom-set/verb-selection"
            element={<VerbSelection />}
          ></Route>
          <Route
            path="/new-set/custom-set/set-progress"
            element={<SetProgress />}
          ></Route>
        </Routes>
      </div>

      <footer className="fixed bottom-0 w-full flex flex-row gap-2 p-5 bg-white">
        {menuItems.map(item => 
          <Button icon={item.icon} buttonClassName="w-full" link={item.path} linkClassName="flex-1" />
        )}
        {/* <Link to="/" className="flex-1">
          <button className="w-full">
            <FontAwesomeIcon icon={faHouse} />
          </button>
        </Link>
        <Link to="/" className="flex-1">
          <button className="w-full">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </Link>
        <Link to="/" className="flex-1">
          <button className="w-full">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </Link> */}
      </footer>
    </div>
  );
}
