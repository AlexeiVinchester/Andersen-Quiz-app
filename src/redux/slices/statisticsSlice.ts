import { createSlice } from "@reduxjs/toolkit";
import { initialStatistics } from "./interfaces/statisticsSlice.interface";

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: { ...initialStatistics },
    reducers: {
        addCurrentQuizResultToStatistics(state, action) {
            state.totalQuestions += action.payload.questions;
            state.totalCorrectAnswers += action.payload.correctAnswers;
            state.categories[action.payload.category] += action.payload.questions;
            state.difficulties[action.payload.difficulty] += action.payload.questions;
            state.types[action.payload.type] += action.payload.questions;
        }
    }
});

export const { addCurrentQuizResultToStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;