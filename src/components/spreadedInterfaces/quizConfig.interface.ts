import { Categories, Difficulties, Types } from "../../redux/slices/interfaces/statisticsSlice.interface";

export interface QuizConfig {
    category: keyof Categories,
    difficulty: keyof Difficulties,
    type: keyof Types,
    time: string
}