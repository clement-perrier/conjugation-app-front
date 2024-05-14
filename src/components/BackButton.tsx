import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function BackButton({ link }) {
  
  return (

    <Button icon={faAngleLeft} buttonClassName="flex justify-center px-4 py-4" link={link}/>

  );
}
