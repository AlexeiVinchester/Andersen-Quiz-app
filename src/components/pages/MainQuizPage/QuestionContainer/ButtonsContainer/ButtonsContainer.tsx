import { ButtonsContainerProps } from "./interfaces/questionType.interface";
import { BooleanButtonsContainer } from "./BooleanButtonsContainer/BooleanButtonsContainer";
import { GroupButtonsContainer } from "./GroupButtonsContainer/GroupButtonsContainer";

const ButtonsContainer = ({ type = 'boolean', answers = ['test'] }: ButtonsContainerProps) => {

  return (
    <div className="question-buttons-container">
      {
        type === "boolean" ? 
        <BooleanButtonsContainer /> : 
        <GroupButtonsContainer answers={answers}/> 
        
      }
    </div>
  )
};

export { ButtonsContainer };