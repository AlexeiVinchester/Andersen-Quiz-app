import { createSlice } from "@reduxjs/toolkit";
import { initialStatistics } from "./interfaces/statisticsSlice.interface";
import { StatisticsPayload } from "./interfaces/statisticsSlice.interface";

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: { ...initialStatistics },
    reducers: {
        addCurrentQuizResultToStatistics(state, action) {
            const {questions, correctAnswers, category, difficulty, type}: StatisticsPayload = action.payload;
            state.totalQuestions += questions;
            state.totalCorrectAnswers += correctAnswers;
            state.categories[category] += questions;
            state.difficulties[difficulty] += questions;
            state.types[type] += questions;
        }
    }
});

export const { addCurrentQuizResultToStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;