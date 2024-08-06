import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { incrementCorrectAnswers } from "../../../../redux/slices/resultSlice";
import { ProgressBarContainer } from "../ProgressBarContainer/ProgressBarContainer";
import { Store } from "../../../../redux/store/interface/store.interface";
import { RESULT } from "../../../Router/routes";

const QuestionContainer = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: questions } = useSelector((state: Store) => state.loadedQuestions);
    const seconds = useSelector((state: Store) => state.result.seconds);
    const question = questions[activeQuestionIndex];

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e.currentTarget.name === question.correct_answer) {
            dispatch(incrementCorrectAnswers());
        }

        activeQuestionIndex === questions.length - 1 ?
            navigate(RESULT, { state: { seconds } }) :
            setActiveQuestionIndex((prev) => prev + 1);
    };

    return (
        <div className="question-container">
            <h4 className="question-text">{question.question}</h4>
            <div className="qroup-question-buttons">
                {
                    [...question.incorrect_answers, question.correct_answer].map((answerButtonText: string) => (
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
            <ProgressBarContainer
                currentQuestion={activeQuestionIndex + 1}
                numberOfQuestions={questions.length}
            />
        </div>
    );
};

export { QuestionContainer };