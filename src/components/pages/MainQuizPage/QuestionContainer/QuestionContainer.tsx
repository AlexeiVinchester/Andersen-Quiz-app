import { QuestionContainerProps } from "./interface/QuestionContainer.interface";

const QuestionContainer = ({ question, changeQuestion }: QuestionContainerProps) => {
    return (
        <div className="question-container">
            <h4 className="question-text">{question.question}</h4>
            <div className="qroup-question-buttons">
                {
                    question.choices.map((answerButtonText: string) => (
                        <button 
                            key={answerButtonText} 
                            type="button"
                            onClick={changeQuestion}
                        >{answerButtonText} 
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export { QuestionContainer };