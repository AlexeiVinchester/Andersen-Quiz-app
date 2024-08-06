import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { AppDispatch } from "../store/store";
import { Data, initialStateObj } from "./interfaces/loadQuestionsSlice.interface";
import { QuizConfig } from "../../components/spreadedInterfaces/quizConfig.interface";
import { categories } from "../../components/initialValues/category";

export const loadQuestions: AsyncThunk<Data[], QuizConfig, { dispatch: AppDispatch, state: RootState }> = createAsyncThunk(
    'loadedQuestions/loadQuestions',
    async (configuration) => {
        const { difficulty, amount, type, category } = configuration;
        let response;
        if (type === 'boolean') {
            response = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=boolean`);
        } else {
            response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categories[category]}&difficulty=${difficulty}&type=multiple`);
        }
        const data = await response.json();
        return data.results;
    }
);

export const loadedQuestionsSlice = createSlice({
    name: 'loadedQuestions',
    initialState: { ...initialStateObj },
    reducers: {
        clearLoadedQuestions(state) {
            state.data = initialStateObj.data;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadQuestions.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadQuestions.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loadQuestions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            });
    },
});

export const { clearLoadedQuestions } = loadedQuestionsSlice.actions;
export default loadedQuestionsSlice.reducer;