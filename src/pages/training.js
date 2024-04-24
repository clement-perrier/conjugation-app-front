import {  useState } from "react"
import HomeButton from '../components/HomeButton';
import { Link } from "react-router-dom";
import { ConjugationService } from '../services/conjugationService';

export default function Training() {

    const conjugationService = ConjugationService();
    const [questions, setQuestions] = useState(conjugationService.GetQuestions());

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const endOfTraining = currentIndex === totalQuestions - 1;
    const goodAnswers = questions.filter(question => question.answer === question.givenAnswer).length;

    const [currentAnswer, setCurrentAnswer] = useState('');

    const [isViewResults, setIsViewResults] = useState(false);

    function next(e){
        e.preventDefault();
        const nextQuestions = questions.map(question => {
            if(question.id === currentQuestion.id){
                return {
                    ...question,
                    givenAnswer: currentAnswer
                }
            } else {
                return question;
            }
        })
        setQuestions(nextQuestions);
        setCurrentAnswer('');
        setCurrentIndex(currentIndex + 1);
    }

    function onChange(e){
        setCurrentAnswer(e.target.value);
    }

    function seeResults(){
        setIsViewResults(true);
    }

    function restartTraining(){
        setQuestions(conjugationService.GetQuestions());
        setCurrentIndex(0);
        setCurrentAnswer('');
        setIsViewResults(false);
    }

    return(
        <>
        <HomeButton/>
        <h2>Training</h2>
        {
            isViewResults ?
            <div>
                <table>
                    <tbody>
                        {questions.map(question => 
                            <tr key={question.id} style={{backgroundColor: question.answer === question.givenAnswer ? 'green' : 'red'}}>
                                <td>{question.answer}</td>
                                <td>{question.givenAnswer}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                Score: {goodAnswers + '/' + totalQuestions}
                <br />
                <button onClick={restartTraining}>Restart training</button>
            </div>
            :
            <form onSubmit={endOfTraining ? seeResults : next}> 
                { currentQuestion.tense + " + " + currentQuestion.pronoun + " + " + currentQuestion.verb }
                <br/>
                <input type="text" required value={currentAnswer} onChange={onChange}/>
                <br/>
                {
                    endOfTraining ? 
                    <button>See results</button>
                    : 
                    <button>Next</button> 
                }
            </form>
        }
        </>
    )

}