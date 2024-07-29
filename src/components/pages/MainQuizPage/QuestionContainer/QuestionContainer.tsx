import { QuestionContainerProps } from "./interface/QuestionContainer.interface";
import { incrementCorrectAnswers } from "../../../../redux/slices/resultSlice";
import { useDispatch } from "react-redux";

const QuestionContainer = ({ question, onChangeQuestion}: QuestionContainerProps) => {
    const dispatch = useDispatch();

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(e.currentTarget.name === question.correctAnswer) {
            dispatch(incrementCorrectAnswers());
        }
        onChangeQuestion();
    }
    
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
                            onClick={onClickHandler}
                        >{answerButtonText} 
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export { QuestionContainer };