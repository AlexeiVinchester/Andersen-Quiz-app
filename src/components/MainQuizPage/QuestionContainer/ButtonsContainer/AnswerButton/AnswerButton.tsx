import { answerButtonProps } from "./interface/answerButton.interface"

const AnswerButton = ({ answerText }: answerButtonProps) => {
    return (
        <button key={answerText} type="button">{answerText}</button>
    )
}

export { AnswerButton };
