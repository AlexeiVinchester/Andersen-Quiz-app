import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { ResultContainer } from "../ResultQuizPage/ResultContainer/ResultContainer";
import { ResultNumberField } from "../ResultQuizPage/ResultNumberField/ResultNumberField";
import { useNavigate } from "react-router-dom";
import { START } from "../../Router/routes";
import { StyledButton } from "../../spreadedComponents/StyledButton/StyledButton";

const StatisticsPage = () => {
    const { totalQuestions, totalCorrectAnswers, difficulties, categories, types } = useSelector((state: Store) => state.statistics);
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
                <ResultContainer header="Difficulties">
                    {
                        Object.keys(difficulties).map(difficulty => (
                            <ResultNumberField
                                key={difficulty}
                                text={difficulty}
                                value={difficulties[difficulty]}
                            />
                        ))
                    }
                </ResultContainer>
                <ResultContainer header="Categories">
                    {
                        Object.keys(categories).map(category => (
                            <ResultNumberField
                                text={category}
                                value={categories[category]}
                                key={category}
                            />
                        ))
                    }
                </ResultContainer>
                <ResultContainer header="Types">
                    {
                        Object.keys(types).map(type => (
                            <ResultNumberField
                                text={type}
                                value={types[type]}
                                key={type}
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
