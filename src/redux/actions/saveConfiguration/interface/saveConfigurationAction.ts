import { QuizConfig } from "../../../../components/spreadedInterfaces/quizConfig.interface"

export interface SaveConfigurationAction {
    type: string,
    payload: QuizConfig
}