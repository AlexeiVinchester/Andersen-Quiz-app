import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useClearCurrentQuizData } from "../../../hooks/useClearCurrentQuizData";
import { addCurrentQuizResultToStatistics } from "../../../redux/slices/statisticsSlice";
import { clearCorrectAnswers, clearSeconds } from "../../../redux/slices/resultSlice";
import { StyledButton } from "../../spreadedComponents/StyledButton/StyledButton";
import { QuizConfigContainer } from "./QuizConfigContainer/QuizConfigContainer";
import { ResultNumberField } from "./ResultNumberField/ResultNumberField";
import { FinishTime } from "./FinishTime/FinishTime";
import { InfoContainer } from "../../spreadedComponents/InfoContainer/InfoContainer";
import { Store } from "../../../redux/store/interface/store.interface";
import { MAIN, START } from "../../Router/routes";

const ResultQuizPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const correctAnswers = useSelector((state: Store) => state.result.correctAnswers);
    const questions = useSelector((state: Store) => state.loadedQuestions.data);
    const { category, difficulty, type } = useSelector((state: Store) => state.configuration);
    const clearCurrentQuizData = useClearCurrentQuizData();

    const onClickRestartQuizHandler = () => {
        dispatch(clearCorrectAnswers());
        dispatch(clearSeconds());
        navigate(MAIN);
    };

    const onClickAnotherQuizHandler = () => {
        clearCurrentQuizData();
        navigate(START);
    };

    useEffect(() => {
        dispatch(addCurrentQuizResultToStatistics({
            questions: questions.length,
            correctAnswers,
            category,
            difficulty,
            type
        }));
    }, [correctAnswers, questions, category, difficulty, type, dispatch]);

    return (
        <div className="result-quiz-page page-container">
            <h4>Thank you for completing this quiz. Here are your results</h4>
            <div className="flex-row">
                <InfoContainer header="Quiz results" >
                    <ResultNumberField text="Total questions" value={questions.length} />
                    <ResultNumberField text="Correct answers" value={correctAnswers} />
                    <ResultNumberField text="Wrong answers" value={questions.length - correctAnswers} />
                    <FinishTime />
                    <StyledButton onClickHandler={onClickRestartQuizHandler} text="Restart quiz" />
                </InfoContainer>
                <InfoContainer header="Quiz configuration">
                    <QuizConfigContainer />
                    <StyledButton onClickHandler={onClickAnotherQuizHandler} text="Another quiz" />
                </InfoContainer>
            </div>
        </div>
    )
};

export { ResultQuizPage };
