import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Store } from "../../../redux/store/interface/store.interface";
import { InfoContainer } from "../../spreadedComponents/InfoContainer/InfoContainer";
import { ResultNumberField } from "../ResultQuizPage/ResultNumberField/ResultNumberField";
import { StyledButton } from "../../spreadedComponents/StyledButton/StyledButton";
import { START } from "../../Router/routes";
import { Statistics } from "../../../redux/slices/interfaces/statisticsSlice.interface";
import { StatisticsContainer } from "./StatisticsContainer/StatisticsContainer";

const StatisticsPage = () => {
    const { totalQuestions, totalCorrectAnswers, difficulties, categories, types }: Statistics = useSelector((state: Store) => state.statistics);
    const navigate = useNavigate();

    const onClickReturnToConfigurationHandler = () => {
        navigate(START);
    };

    return (
        <div className="statistics-page page-container flex-col">
            <h4>Full statistics of questions for full period</h4>
            <ResultNumberField text="Questions" value={totalQuestions} />
            <ResultNumberField text="Correct Answers" value={totalCorrectAnswers} />
            <div className="flex-row statistics-group">
                <InfoContainer header="Difficulties">
                    <StatisticsContainer data={difficulties} />
                </InfoContainer>
                <InfoContainer header="Categories">
                    <StatisticsContainer data={categories} />
                </InfoContainer>
                <InfoContainer header="Types">
                    <StatisticsContainer data={types} /> 
                </InfoContainer>
            </div>
            <div className="statistics-button-to-start">
                <StyledButton
                    text="Return to configuration"
                    onClickHandler={onClickReturnToConfigurationHandler}
                />
            </div>
        </div>
    )
};

export { StatisticsPage };
