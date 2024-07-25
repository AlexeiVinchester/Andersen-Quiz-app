import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";
import { MAIN, STATISTICS } from "../../../Router/routes";

const ButtonsContainer = () => {
    const navigate = useNavigate();

    const onClickStartQuizHandler = () => {
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