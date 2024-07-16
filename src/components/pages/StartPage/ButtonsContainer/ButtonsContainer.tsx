import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";

const ButtonsContainer = () => {
    return (
        <div className="flex-row buttons-container">
            <StyledButton onClickHandler={() => {}} text="Start quiz" />
            <StyledButton onClickHandler={() => {}} text="See my stats" />
        </div>
    );
};

export { ButtonsContainer };