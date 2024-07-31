import { useDispatch } from "react-redux";
import { clearConfiguration } from "../redux/slices/configurationSlice";
import { clearCorrectAnswers } from "../redux/slices/resultSlice";
import { clearQuestions } from "../redux/slices/questionsSlice";
import { clearLoadedQuestions } from "../redux/slices/loadQuestionsSlice";

const useClearCurrentQuizData = () => {
    const dispatch = useDispatch();
    return () => {
        dispatch(clearConfiguration());
        dispatch(clearCorrectAnswers());
        dispatch(clearQuestions());
        dispatch(clearLoadedQuestions());
    };
};

export { useClearCurrentQuizData };