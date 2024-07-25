import { QuestionContainerProps } from "./interface/QuestionContainer.interface";

const QuestionContainer = ({ question, onChangeQuestion}: QuestionContainerProps) => {
    return (
        <div className="question-container">
            <h4 className="question-text">{question.question}</h4>
            <div className="qroup-question-buttons">
                {
                    question.choices.map((answerButtonText: string) => (
                        <button 
                            key={answerButtonText} 
                            type="button"
                            name={answerButtonText}
                            onClick={() => {
                                onChangeQuestion();
                            }}
                        >{answerButtonText} 
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export { QuestionContainer };