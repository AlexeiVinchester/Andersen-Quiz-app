import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { ProgressBarContainer } from "./ProgressBarContainer/ProgressBarContainer";
import { TimerContainer } from "./TimerContainer/TimerContainer";

const MainQuizPage = () => {
    return (
        <div className="main-quiz-page-container">
            <QuestionContainer
                question={{
                    question: 'What is the rigth answer?',
                    choices: ['a', 'b', 'c', 'd'],
                    correctAnswer: 'a',
                    type: 'group'
                }}
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
