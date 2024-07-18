import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer";
import { TimerContainer } from "./TimerContainer/TimerContainer";
import { initialQuestion } from "../../initialValues/initialQuestion";

const MainQuizPage = () => {
    return (
        <div className="main-quiz-page page-container">
            <QuestionContainer
                question={initialQuestion}
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
