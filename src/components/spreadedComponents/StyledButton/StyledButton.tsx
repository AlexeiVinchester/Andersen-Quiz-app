import { styledButtonProps } from "./interface/styledButton.interface"

const StyledButton = ({ text }: styledButtonProps) => {
    return (
        <button className="styled-button" type="button">{text}</button>
    )
}

export { StyledButton };
