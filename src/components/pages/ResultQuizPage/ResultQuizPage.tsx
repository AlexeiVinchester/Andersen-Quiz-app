import { StyledButton } from "../../spreadedComponents/StyledButton/StyledButton";
import { FinishTime } from "./FinishTime/FinishTime";
import { QuizConfigContainer } from "./QuizConfigContainer/QuizConfigContainer";
import { ResultNumberField } from "./ResultNumberField/ResultNumberField";
import { ResultQuizPageProps } from "./interface/resultQuizPage.interface";
import { ResultContainer } from "./ResultContainer/ResultContainer";
import { useNavigate } from "react-router-dom";
import { MAIN, START } from "../../Router/routes";
import { useDispatch } from "react-redux";
import { clearConfiguration } from "../../../redux/slices/configurationSlice";


const ResultQuizPage = ({ quizConfig }: ResultQuizPageProps) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const onClickRestartQuizHandler = () => {
        navigate(MAIN);
    }

    const onClickAnotherQuizHandler = () => {
        dispatch(clearConfiguration());
        navigate(START);
    }

    return (
        <div className="result-quiz-page page-container">
            <h4>Thank you for completing this quiz. Here are your results</h4>
            <div className="flex-row">
                <ResultContainer header="Quiz results" >
                    <ResultNumberField text="Total questions" value={0} />
                    <ResultNumberField text="Correct answers" value={0} />
                    <ResultNumberField text="Wrong answers" value={0} />
                    <FinishTime startTime={Date.now().toString()} />
                    <StyledButton onClickHandler={onClickRestartQuizHandler} text="Restart quiz" />
                </ResultContainer>
                <ResultContainer header="Quiz configuration">
                    <QuizConfigContainer quizConfig={quizConfig} />
                    <StyledButton onClickHandler={onClickAnotherQuizHandler} text="Another quiz" />
                </ResultContainer>
            </div>
        </div>
    )
}

export { ResultQuizPage };
