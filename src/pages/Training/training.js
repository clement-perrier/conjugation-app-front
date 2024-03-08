import { useContext, useState } from "react"
import { QuestionContext } from "../../contexts/question-context"
import HomeButton from '../../components/HomeButton/home-button';
import { Link } from "react-router-dom";

export default function Training() {

    const questions = useContext(QuestionContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questions[currentIndex];

    console.log(currentIndex);

    function next(){
        setCurrentIndex(currentIndex + 1);
    }

    return(
        <>
        <HomeButton/>
        <h2>Training</h2>
        <Question question={currentQuestion} />
        {
            currentIndex < questions.length - 1 ?
                <button onClick={next}>Next</button>
                :
                <Link to="/summary">
                    <button>
                        End
                    </button>
                </Link>
        }
        </>
    )

}

function Question({question}){
    return(
        <div>
            {question.tense + " + " + question.pronoun + " + " + question.verb}
        </div>
    )
}