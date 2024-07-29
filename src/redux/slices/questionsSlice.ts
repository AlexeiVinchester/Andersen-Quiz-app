import { createSlice } from "@reduxjs/toolkit";
import { initialQuestion, questions } from "../../components/initialValues/initialQuestion";

const questionsSlice = createSlice({
    name: 'questions',
    initialState: [initialQuestion],
    reducers: {
        clearQuestions(state) {
            state.length = 0;
        },
        getQuestions(state) {
            state.length = 0;
            state.push(...questions);
        }
    }
});

export const { clearQuestions, getQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;