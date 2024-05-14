import BackButton from "../../../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedTense } from "../../../redux/slices";
import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { RootStateInterface } from "redux/interfaces";

export default function TenseSelection() {
  /* const tenseList = useSelector((state: RootStateInterface) => state.tenseList.data);

  const dispatch = useDispatch(); */

  return (
    <>
      <BackButton link="/new-set" />
      <div className="flex flex-col flex-1 justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 sm:gap-y-8 md:gap-y-14 lg:gap-y-18 gap-x-3 auto-rows-fr">
          {/* {tenseList ? (
            tenseList.map((tense) => (
              <Link key={tense.id} to={"/new-set/custom-set/verb-selection"}>
                <button
                  className="w-full h-14 text-xs"
                  onClick={() => dispatch(updateSelectedTense(tense))}
                >
                  {tense.name}
                </button>
              </Link>
            ))
          ) : (
            <p>Loading tenses...</p>
          )} */}
        </div>
      </div>
    </>
  );
}
