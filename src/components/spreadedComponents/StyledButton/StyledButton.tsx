import { StyledButtonProps } from "./interface/styledButton.interface"

const StyledButton = ({ text, onClickHandler }: StyledButtonProps) => {
    return (
        <button 
            className="styled-button" 
            type="button"
            onClick={onClickHandler}
        >{text}</button>
    )
}

export { StyledButton };
