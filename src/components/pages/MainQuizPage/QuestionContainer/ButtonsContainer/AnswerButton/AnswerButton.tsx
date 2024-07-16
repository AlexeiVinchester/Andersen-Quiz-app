import { AnswerButtonProps } from "./interface/answerButton.interface"

const AnswerButton = ({ answerText }: AnswerButtonProps) => {
    return (
        <button type="button">{answerText}</button>
    )
}

export { AnswerButton };
