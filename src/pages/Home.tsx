import { Link } from "react-router-dom";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  
  const newSetButtonContent = <FontAwesomeIcon icon={faPlus} className="" />;
  /* const { repetitionDates, setRepetitionDates } = useContext(
    RepetitionDatesContext
  ); */

  /* useEffect(() => {
        if (tenseList) {
            console.log(tenseList);
        }
    }, [tenseList]);  // Cette ligne s'assure que le useEffect s'exécute chaque fois que tenseList change */

  return (
    <>
      {/* {repetitionDates.length > 0 ? (
        repetitionDates.map((month, index) => (
          <Month key={index} month={month} />
        ))
      ) : (
        <div>None</div>
      )} */}

      {/* <Button className='' onClick={() => setRepetitionDates([])}>test</Button> */}
      <div className="mt-20 items-center flex flex-col gap-5">
        <div className="badge-button w-1/2">
          <Link to="/summary" className="w-full">
            <button className="w-full">Start today repetition(s)</button>
          </Link>
        </div>
      </div>

      <Button icon={faPlus} buttonClassName="w-14 h-14" link="/new-set" linkClassName="fixed right-1/2 translate-x-1/2 bottom-24"/>
    </>
  );
}
