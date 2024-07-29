import { QuizConfig } from "../../../components/spreadedInterfaces/quizConfig.interface";
import { Result } from "../../../components/spreadedInterfaces/result.interface";
import { Question } from "../../../components/pages/MainQuizPage/QuestionContainer/interface/question.interface";
export interface Store {
    configuration: QuizConfig,
    result: Result,
    questions: Question[]
}