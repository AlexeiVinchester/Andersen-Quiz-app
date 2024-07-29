import { Option } from "../../options/option.interface"
import { QuizConfig } from "../../../../../spreadedInterfaces/quizConfig.interface"
export interface SelectInputProps {
    label: string,
    options: Option[],
    onChangeSelectField: React.Dispatch<React.SetStateAction<QuizConfig>>
}