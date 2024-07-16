import { StyledButtonProps } from "./interface/styledButton.interface"

const StyledButton = ({ text }: StyledButtonProps) => {
    return (
        <button className="styled-button" type="button">{text}</button>
    )
}

export { StyledButton };
