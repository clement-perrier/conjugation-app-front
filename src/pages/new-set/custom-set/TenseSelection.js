import BackButton from "../../../components/BackButton"
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function TenseSelection(){

    const tenseList = useSelector(state => state.tenses.data);

    return (
        <>
            <BackButton link='/new-set' />
            <div className="flex flex-col flex-1 justify-center">
                <div className="grid grid-cols-2 gap-10 auto-rows-fr">
                    {tenseList ? tenseList.map(tense => (
                        <Link to={'/new-set/custom-set/verb-selection'}>
                            <Button className="w-full h-full" key={tense.id}>{tense.name}</Button>
                        </Link>
                    )) : <p>Loading tenses...</p>}
                </div>
            </div>
        </>
    )
}