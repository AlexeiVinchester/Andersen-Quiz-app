import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer";
import { RESULT } from "../../Router/routes";
import { useInitialiseTimer } from "./hooks/useInitialiseTimer";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";

const MainQuizPage = () => {
    const {
        activeQuestionIndex,
        setActiveQuestionIndex,
        navigate,
        minutesString,
        secondsString,
        isDanger
    } = useInitialiseTimer();

    const onChangeQuestionHandler = () => {
        return activeQuestionIndex === questions.length - 1 ?
               navigate(RESULT) :
               setActiveQuestionIndex((prev) => prev + 1);
    };

    const questions = useSelector((state: Store) => state.questions)

    return (
        <div className="main-quiz-page page-container">
            <QuestionContainer
                question={questions[activeQuestionIndex]}
                onChangeQuestion={onChangeQuestionHandler}
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
