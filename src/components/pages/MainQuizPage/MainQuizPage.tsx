import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer";
import { questions } from "../../initialValues/initialQuestion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RESULT } from "../../Router/routes";

const MainQuizPage = () => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [seconds, setSeconds] = useState(20);
    const navigate = useNavigate();

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    useEffect(() => {
        const timerId = setInterval(() => setSeconds((prev) => Math.max(prev - 1, 0)), 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    if (seconds <= 0) navigate(RESULT);

    return (
        <div className="main-quiz-page page-container">
            <QuestionContainer
                question={questions[activeQuestionIndex]}
                changeQuestion={() => {
                    activeQuestionIndex === questions.length - 1 ?
                        navigate(RESULT) :
                        setActiveQuestionIndex((prev) => prev + 1)
                }}
            />
            <ProgressBarContainer
                currentQuestion={activeQuestionIndex + 1}
                numberOfQuestions={questions.length}
            />
            <div className="main-quiz-page-footer">
                <div className="timer-container">
                    Timer: {" "}
                    <span className={isDanger ? "timer-container-danger" : ""}>
                        {minutesString} : {secondsString}
                    </span>
                </div>
                <EndQuizButton />
            </div>
        </div>
    );
};

export { MainQuizPage };
