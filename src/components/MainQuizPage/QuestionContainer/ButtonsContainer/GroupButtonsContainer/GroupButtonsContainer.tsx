import { AnswerButton } from "../AnswerButton/AnswerButton";
import { groupButtonsContainerProps } from "./interface/groupButtonsContainer";

const GroupButtonsContainer = ({answers}: groupButtonsContainerProps) => {
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
