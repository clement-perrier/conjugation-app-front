import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function BackButton ({link}){

    return (
        <>
            <div className="fixed top-0 left-0 p-5">
                <Link to={link}>
                    <Button className="flex justify-center px-4 py-4">
                        <FontAwesomeIcon icon={faAngleLeft} className="font-bold size-4"/>
                    </Button>
                </Link>
            </div>
        </>
    )

}