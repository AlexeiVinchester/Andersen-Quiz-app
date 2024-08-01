import { Difficulties, Categories, Types } from "../../../../../redux/slices/interfaces/statisticsSlice.interface"

export interface StatisticsContainerProps {
    data: Difficulties | Categories | Types
}