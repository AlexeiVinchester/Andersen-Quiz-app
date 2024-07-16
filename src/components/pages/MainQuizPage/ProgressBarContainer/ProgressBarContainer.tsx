import { ProgressBarContainerProps } from "./interface/progressBarContainer.interface";

const ProgressBarContainer = ({ currentQuestion, numberOfQuestions }: ProgressBarContainerProps) => {
    return (
        <div className="progress-bar-container">
            <label>Question {currentQuestion} of {numberOfQuestions}</label>
            <progress max={numberOfQuestions} value={currentQuestion} />

        </div>
    )
};

export { ProgressBarContainer };