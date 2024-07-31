import { QuizConfig } from "../../../components/spreadedInterfaces/quizConfig.interface";
import { Result } from "../../../components/spreadedInterfaces/result.interface";
import { Question } from "../../../components/pages/MainQuizPage/QuestionContainer/interface/question.interface";
import { Data } from "../../slices/interfaces/loadQuestionsSlice.interface";
import { Statistics } from "../../slices/interfaces/statisticsSlice.interface";
export interface Store {
    configuration: QuizConfig,
    result: Result,
    questions: Question[],
    loadedQuestions: Data[],
    statistics: Statistics
}