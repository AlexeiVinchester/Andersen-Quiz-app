import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Store } from "../../../redux/store/interface/store.interface";
import { ResultContainer } from "../ResultQuizPage/ResultContainer/ResultContainer";
import { ResultNumberField } from "../ResultQuizPage/ResultNumberField/ResultNumberField";
import { StyledButton } from "../../spreadedComponents/StyledButton/StyledButton";
import { START } from "../../Router/routes";
import { Statistics } from "../../../redux/slices/interfaces/statisticsSlice.interface";

const StatisticsPage = () => {
    const { totalQuestions, totalCorrectAnswers, difficulties, categories, types }: Statistics = useSelector((state: Store) => state.statistics);
    const navigate = useNavigate();

    const onClickReturnToConfigurationHandler = () => {
        navigate(START);
    };

    console.log(Object.entries(difficulties))

    return (
        <div className="statistics-page page-container flex-col">
            <h4>Full statistics of questions for full period</h4>
            <ResultNumberField text="Questions" value={totalQuestions} />
            <ResultNumberField text="Correct Answers" value={totalCorrectAnswers} />

            <div className="flex-row statistics-group">
                <ResultContainer header="Difficulties">
                    {
                        Object.entries(difficulties).map(item => (
                            <ResultNumberField
                                key={item[0]}
                                text={item[0]}
                                value={item[1]}
                            />
                        ))
                    }
                </ResultContainer>
                <ResultContainer header="Categories">
                    {
                        Object.entries(categories).map(item => (
                            <ResultNumberField
                                key={item[0]}
                                text={item[0]}
                                value={item[1]}
                            />
                        ))
                    }
                </ResultContainer>
                <ResultContainer header="Types">
                    {
                        Object.entries(types).map(item => (
                            <ResultNumberField
                                key={item[0]}
                                text={item[0]}
                                value={item[1]}
                            />
                        ))
                    }
                </ResultContainer>
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
