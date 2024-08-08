import { Data } from "../../../../../redux/slices/interfaces/loadQuestionsSlice.interface";

export interface QuestionContainerProps {
    question: Data,
    onChangeQuestion: () => void
}

