import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { MAIN, STATISTICS } from "../../../Router/routes";
import { useDispatch } from "react-redux";
import { saveConfiguration } from "../../../../redux/slices/configurationSlice";
import { ButtonsContainerProps } from "./interface/buttonsContainer.interface";

const ButtonsContainer = ({configuration}: ButtonsContainerProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickStartQuizHandler = () => {
        dispatch(saveConfiguration(configuration));
        navigate(MAIN);
    };

    const onClickSeeMyStatsHandler = () => {
        navigate(STATISTICS)
    };

    return (
        <div className="flex-row buttons-container">
            <StyledButton onClickHandler={onClickStartQuizHandler} text="Start quiz" />
            <StyledButton onClickHandler={onClickSeeMyStatsHandler} text="See my stats" />
        </div>
    );
};

export { ButtonsContainer };