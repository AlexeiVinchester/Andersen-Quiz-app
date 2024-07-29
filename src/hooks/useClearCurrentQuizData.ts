import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearConfiguration } from "../redux/slices/configurationSlice";
import { clearCorrectAnswers } from "../redux/slices/resultSlice";
import { clearQuestions } from "../redux/slices/questionsSlice";
import { clearLoadedQuestions } from "../redux/slices/loadQuestionsSlice";
import { START } from "../components/Router/routes";

const useClearCurrentQuizData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return () => {
        dispatch(clearConfiguration());
        dispatch(clearCorrectAnswers());
        dispatch(clearQuestions());
        dispatch(clearLoadedQuestions());
        navigate(START);
    };
};

export { useClearCurrentQuizData };