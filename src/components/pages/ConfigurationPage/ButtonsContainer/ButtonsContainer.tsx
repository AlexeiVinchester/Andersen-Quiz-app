import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { MAIN, STATISTICS } from "../../../Router/routes";
import { saveConfiguration } from "../../../../redux/slices/configurationSlice";
import { ButtonsContainerProps } from "./interface/buttonsContainer.interface";
import { getQuestions } from "../../../../redux/slices/questionsSlice";
import { loadQuestions } from "../../../../redux/slices/loadQuestionsSlice";
import { AppDispatch } from "../../../../redux/store/store";

const ButtonsContainer = ({configuration}: ButtonsContainerProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const useThunkDispatch = () => useDispatch<AppDispatch>();
    const thunkDispatch = useThunkDispatch();

    const onClickStartQuizHandler = () => {
        dispatch(saveConfiguration(configuration));
        navigate(MAIN);
        dispatch(getQuestions());
        thunkDispatch(loadQuestions(configuration));
    };

    const onClickSeeMyStatsHandler = () => {
        navigate(STATISTICS);
    };

    return (
        <div className="flex-row buttons-container">
            <StyledButton onClickHandler={onClickStartQuizHandler} text="Start quiz" />
            <StyledButton onClickHandler={onClickSeeMyStatsHandler} text="See my stats" />
        </div>
    );
};

export { ButtonsContainer };