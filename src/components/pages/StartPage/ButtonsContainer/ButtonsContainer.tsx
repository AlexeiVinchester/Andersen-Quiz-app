import { StyledButton } from "../../../spreadedComponents/StyledButton/StyledButton";

const ButtonsContainer = () => {
    return (
        <div className="flex-row buttons-container">
            <StyledButton text="Start quiz" />
            <StyledButton text="See my stats" />
        </div>
    );
};

export { ButtonsContainer };