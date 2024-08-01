import { ResultNumberField } from "../../ResultQuizPage/ResultNumberField/ResultNumberField";
import { StatisticsContainerProps } from "./interface/StatisticsContainer.interface";

const StatisticsContainer = ({ data }: StatisticsContainerProps) => {
    return Object.entries(data).map(item => (
                    <ResultNumberField
                        key={item[0]}
                        text={item[0]}
                        value={item[1]}
                    />
                ))
};

export { StatisticsContainer };