import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedVerbList, updateVerbList } from "../../../redux/slices";
import BackButton from "../../../components/BackButton";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function VerbSelection(){

    const dispatch = useDispatch();

    const selectedTense = useSelector(state => state.selectedTense.value);
    const selectedVerbList = useSelector(state => state.selectedVerbList.data);
    const verbList = useSelector(state => state.verbList.data);

    useEffect(()  => {
        console.log('Verb list: ', verbList);
        console.log('Selected verb list: ',selectedVerbList);
    }, [verbList]);

    return (
        <>
            <BackButton link='/new-set/custom-set/tense-selection' />
            <h1 className="text-center my-8 font-medium">{selectedTense.name}</h1>
            <div className="min-h-10 mb-5">
                {selectedVerbList.map(verb => 
                    <button key={verb.id} className="rounded-lg py-1 px-2 mr-2 mb-2 bg-gray-300 relative">
                        <div className="mr-4">{verb.name}</div>
                        <FontAwesomeIcon icon={faXmark} className="absolute top-1 right-2 text-xs text-gray-700"></FontAwesomeIcon>
                    </button>
                )}
            </div>
            <div className="flex flex-col flex-1 overflow-scroll">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 sm:gap-y-8 md:gap-y-14 lg:gap-y-18 gap-x-3 auto-rows-fr">
                    {
                        verbList ? verbList.map(verb => 
                            <Button key={verb.id} 
                                    className="w-full h-14 text-xs"
                                    onClick={() => {
                                        dispatch(updateSelectedVerbList(verb));
                                        dispatch(updateVerbList(verb))
                                    }}
                            >
                                {verb.name}
                            </Button>
                        ) : <div>loading...</div>
                    }
                </div>
            </div>
        </>
    )
    
}