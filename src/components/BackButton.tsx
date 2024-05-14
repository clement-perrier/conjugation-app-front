import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BackButton({ link }) {
  return (
    <>
      <div className="">
        <Link to={link}>
          <button className="flex justify-center px-4 py-4">
            <FontAwesomeIcon icon={faAngleLeft} className="font-bold size-4" />
          </button>
        </Link>
      </div>
    </>
  );
}
