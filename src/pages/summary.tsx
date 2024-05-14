import { Link } from "react-router-dom";
import { useContext } from "react";
import HomeButton from "../components/HomeButton";
import { ConjugationGridListContext } from "../contexts/conjugation-grid-list-context";
import React from "react";

export default function Summary() {
  // const conjugationGridList:any = useContext(ConjugationGridListContext);

    return (
        <>
            <HomeButton/>
            <h2>Let's learn the present of the three most used verbs in Spanish:</h2>
            {/* {
                conjugationGridList.map(grid =>
                    <ConjugationGrid 
                        key={grid.id}
                        grid={grid}
                    />
                )
            } */}
            <Link to='/training'>
                <button>Start training</button>
            </Link>
        </>
    );
}

function ConjugationGrid({ grid }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{grid.verb}</th>
        </tr>
      </thead>
      <tbody>
        {grid.conjugations.map((conjugation) => (
          <Conjugation key={conjugation.id} conjugation={conjugation} />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

function Conjugation({ conjugation }) {
  return (
    <tr>
      <td>
        {conjugation.pronoun} {conjugation.conjugatedVerb}
      </td>
    </tr>
  );
}
