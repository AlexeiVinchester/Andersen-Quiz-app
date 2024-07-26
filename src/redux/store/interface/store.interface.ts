import { QuizConfig } from "../../../components/spreadedInterfaces/quizConfig.interface";
import { Result } from "../../../components/spreadedInterfaces/result.interface";

export interface Store {
    configuration: QuizConfig,
    result: Result
}