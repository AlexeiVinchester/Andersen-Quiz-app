import { QuestionContainerProps } from "./interface/QuestionContainer.interface";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";

const QuestionContainer = ({ question }: QuestionContainerProps) => {
    return (
        <div className="question-container">
            <h4 className="question-text">{question.question}</h4>
            <ButtonsContainer type={question.type} answers={question.choices} />
        </div>
    );
};

export { QuestionContainer };