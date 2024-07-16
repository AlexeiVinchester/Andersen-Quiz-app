import { QuestionContainerProps } from "./interface/QuestionContainer.interface";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";

const QuestionContainer = ({ question }: QuestionContainerProps) => {
    return (
        <div className="question-container">
            <p className="question-text">{question.question}</p>
            <ButtonsContainer type={question.type} answers={question.choices} />
        </div>
    );
};

export { QuestionContainer };