import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer";
import { TimerContainer } from "./TimerContainer/TimerContainer";

import { questions } from "../../initialValues/initialQuestion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RESULT } from "../../Router/routes";

const MainQuizPage = () => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="main-quiz-page page-container">
            <QuestionContainer
                question={questions[activeQuestionIndex]}
                changeQuestion={() => {
                    activeQuestionIndex === questions.length - 1 ?
                    navigate(RESULT) :
                    setActiveQuestionIndex((prev) => prev + 1)}
                }
            />
            <ProgressBarContainer currentQuestion={1} numberOfQuestions={2} />
            <div className="main-quiz-page-footer">
                <TimerContainer startTime={Date.now().toString()} />
                <EndQuizButton />
            </div>

        </div>

    );
};

export { MainQuizPage };
