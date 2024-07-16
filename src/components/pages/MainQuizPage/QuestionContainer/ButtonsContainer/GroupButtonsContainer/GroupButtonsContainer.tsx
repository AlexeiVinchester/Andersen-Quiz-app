import { AnswerButton } from "../AnswerButton/AnswerButton";
import { GroupButtonsContainerProps } from "./interface/groupButtonsContainer";

const GroupButtonsContainer = ({answers}: GroupButtonsContainerProps) => {
    return (
        <div className="qroup-question-buttons">
            {
              answers.map((answerButtonText: string) => (
                <AnswerButton key={answerButtonText} answerText={answerButtonText} />
              ))
            }
          </div>
    )
};

export { GroupButtonsContainer };
