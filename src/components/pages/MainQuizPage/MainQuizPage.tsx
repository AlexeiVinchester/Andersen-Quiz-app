import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { RESULT } from "../../Router/routes";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer";
import { useInitialiseTimer } from "../../../hooks/useInitialiseTimer";
import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { Loader } from "../../spreadedComponents/Loader/Loader";

const MainQuizPage = () => {
    const {
        seconds,
        activeQuestionIndex,
        setActiveQuestionIndex,
        navigate,
        minutesString,
        secondsString,
        isDanger
    } = useInitialiseTimer();

    const { data: questions, loading } = useSelector((state: Store) => state.loadedQuestions);

    const onChangeQuestionHandler = () => {
        return activeQuestionIndex === questions.length - 1 ?
            navigate(RESULT, { state: { seconds } }) :
            setActiveQuestionIndex((prev) => prev + 1);
    };

    return (
        <div className="main-quiz-page page-container">
            {
                !loading ?
                    <>
                        <QuestionContainer
                            question={questions[activeQuestionIndex]}
                            onChangeQuestion={onChangeQuestionHandler}
                        />
                        <ProgressBarContainer
                            currentQuestion={activeQuestionIndex + 1}
                            numberOfQuestions={questions.length}
                        />
                    </>
                    : <Loader />
            }

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
