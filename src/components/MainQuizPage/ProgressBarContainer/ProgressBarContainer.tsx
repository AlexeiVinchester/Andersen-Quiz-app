import { progressBarContainerProps } from "./interface/progressBarContainer.interface";

const ProgressBarContainer = ({ currentQuestion, numberOfQuestions }: progressBarContainerProps) => {
    return (
        <div className="progress-bar-container">
            <label>Question {currentQuestion} of {numberOfQuestions}</label>
            <progress max={numberOfQuestions} value={currentQuestion} />

        </div>
    )
};

export { ProgressBarContainer };