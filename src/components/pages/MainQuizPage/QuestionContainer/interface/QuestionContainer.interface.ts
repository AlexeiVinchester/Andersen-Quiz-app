import { Question } from "./question.interface";

export interface QuestionContainerProps {
    question: Question,
    onChangeQuestion: () => void
}

