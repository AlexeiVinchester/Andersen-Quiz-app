import { QuizConfig } from "../../../../spreadedInterfaces/quizConfig.interface"

export interface SelectContainerProps {
    onChangeSelectField: React.Dispatch<React.SetStateAction<QuizConfig>>
}