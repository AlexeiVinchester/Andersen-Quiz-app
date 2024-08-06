import { QuizConfig } from "../../../../spreadedInterfaces/quizConfig.interface";

export interface NumberInputContainerProps {
    placeholder: string,
    label: string,
    min: number,
    max: number,
    onChangeNumber: React.Dispatch<React.SetStateAction<QuizConfig>>
}
