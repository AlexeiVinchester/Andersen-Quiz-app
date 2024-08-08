import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { EndQuizButton } from "./EndQuizButton/EndQuizButton";
import { QuestionContainer } from "./QuestionContainer/QuestionContainer";
import { Loader } from "../../spreadedComponents/Loader/Loader";
import { TimerContainer } from "./TimerContainer/TimerContainer";

const MainQuizPage = () => {
    const { loading } = useSelector((state: Store) => state.loadedQuestions);

    return (
        <div className="main-quiz-page page-container">
            {loading ? <Loader /> : <QuestionContainer />}
            <div className="main-quiz-page-footer">
                <TimerContainer />
                <EndQuizButton />
            </div>
        </div>
    );
};

export { MainQuizPage };
