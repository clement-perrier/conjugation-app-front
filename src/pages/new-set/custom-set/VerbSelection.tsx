import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedVerbList } from "../../../redux/slices";
import BackButton from "../../../components/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { RootStateInterface } from "redux/interfaces";
import Button from "../../../components/Button";

export default function VerbSelection() {

  const dispatch = useDispatch();

  const selectedTense = useSelector((state: RootStateInterface) => state.selectedTense.value);
  const selectedVerbList = useSelector((state: RootStateInterface) => state.selectedVerbList.data);
  const verbList = useSelector((state: RootStateInterface) => state.verbList.data);

  const [unselectedVerbList, setUnselectedVerbList] = useState([]);
  const [displayedVerbList, setDisplayedVerbList] = useState([]);

  useEffect(() => {
    setUnselectedVerbList([...verbList]);
    setDisplayedVerbList([...verbList]);
  }, [verbList]);

  return (
    <>
      <BackButton link="/new-set/custom-set/tense-selection" />
      <h1 className="text-center my-4 font-medium">{selectedTense.name}</h1>

      <label>
        Verb search 
        <input 
          name="myInput" 
          onChange={(e) =>
            // Updating the displayed list filtering the unselected list
            setDisplayedVerbList(
              unselectedVerbList.filter((verb) =>
                verb.name.includes(e.target.value.toLowerCase())
              )
            )
          } />
      </label>

      <div className="min-h-10 mt-5 mb-5">
        {selectedVerbList.map((verb) => (
          <button
            key={verb.id}
            className="rounded-lg py-1 px-2 mr-2 mb-2 bg-gray-300 relative"
          >
            <div className="mr-4">{verb.name}</div>
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute top-1 right-2 text-xs text-gray-700"
            ></FontAwesomeIcon>
          </button>
        ))}
      </div>

      <div className="flex flex-col overflow-scroll">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 sm:gap-y-8 md:gap-y-14 lg:gap-y-18 gap-x-3 auto-rows-fr">
          {displayedVerbList ? (
            displayedVerbList.map((verb) => (
              <Button
                key={verb.id}
                label={verb.name}
                buttonClassName="w-full h-14"
                onClick={() => {
                  dispatch(updateSelectedVerbList(verb));
                  // Updating the displayed list as the one clicked will disapear from the list
                  setDisplayedVerbList(
                    displayedVerbList.filter((item) => item.id !== verb.id)
                  );
                  // Updating the unselected list as the text filter will not
                  // take into account the one clicked and removed anymore
                  setUnselectedVerbList(
                    unselectedVerbList.filter((item) => item.id !== verb.id)
                  );
                }}
              />
                /* {verb.name}
              </button> */
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>

      <Button label='valider' buttonClassName="px-8" linkClassName="text-center mt-5 px-8" link="/new-set/custom-set/set-progress"/>
      
    </>
  );
}
