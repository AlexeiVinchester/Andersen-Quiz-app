import { StyledButton } from "../../spreadedComponents/StyledButton/StyledButton";
import { FinishTime } from "./FinishTime/FinishTime";
import { QuizConfigContainer } from "./QuizConfigContainer/QuizConfigContainer";
import { ResultNumberField } from "./ResultNumberField/ResultNumberField";
import { ResultContainer } from "./ResultContainer/ResultContainer";
import { useNavigate } from "react-router-dom";
import { MAIN, START} from "../../Router/routes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { clearCorrectAnswers } from "../../../redux/slices/resultSlice";
import { useClearCurrentQuizData } from "../../../hooks/useClearCurrentQuizData";
import { useEffect } from "react";
import { addCurrentQuizResultToStatistics } from "../../../redux/slices/statisticsSlice";

const ResultQuizPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const correctAnswers = useSelector((state: Store) => state.result.correctAnswers);
    const questions = useSelector((state: Store) => state.questions);
    const {category, difficulty, type} = useSelector((state: Store) => state.configuration);
    const clearCurrentQuizData = useClearCurrentQuizData(); 

    const onClickRestartQuizHandler = () => {
        dispatch(clearCorrectAnswers());
        navigate(MAIN);
    };

    const onClickAnotherQuizHandler = () => {
        clearCurrentQuizData();
        navigate(START);
    };

    const saveStatistics = () => {
        dispatch(addCurrentQuizResultToStatistics({
            questions: questions.length,
            correctAnswers,
            category,
            difficulty, 
            type
        }));
    };

    useEffect(() => {
        console.log('Mounting result pade ande geting quiz results');
        saveStatistics()
    });

    return (
        <div className="result-quiz-page page-container">
            <h4>Thank you for completing this quiz. Here are your results</h4>
            <div className="flex-row">
                <ResultContainer header="Quiz results" >
                    <ResultNumberField text="Total questions" value={questions.length} />
                    <ResultNumberField text="Correct answers" value={correctAnswers} />
                    <ResultNumberField text="Wrong answers" value={questions.length - correctAnswers} />
                    <FinishTime startTime={Date.now().toString()} />
                    <StyledButton onClickHandler={onClickRestartQuizHandler} text="Restart quiz" />
                </ResultContainer>
                <ResultContainer header="Quiz configuration">
                    <QuizConfigContainer />
                    <StyledButton onClickHandler={onClickAnotherQuizHandler} text="Another quiz" />
                </ResultContainer>
            </div>
        </div>
    )
}

export { ResultQuizPage };
