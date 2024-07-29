import { createSlice } from "@reduxjs/toolkit";

export const initialStatistics = {
    totalQuestions: 0,
    totalCorrectAnswers: 0,
    difficulties: {
        easy: 0,
        medium: 0,
        hard: 0
    },
    categories: {
        sports: 0,
        geography: 0,
        vehicles: 0
    },
    types: {
        group: 0,
        boolean: 0
    }
};


const payload = {
    questions: 0,
    correctAnswers: 0,
    category: '',
    difficulty: '',
    type: ''
};

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {...initialStatistics},
    reducers: {
        addCurrentQuizResultToStatistics(state, action) {
            state.totalQuestions += action.payload.questions;
            state.totalCorrectAnswers += action.payload.correctAnswers;
        }
    }
});

export const {addCurrentQuizResultToStatistics} = statisticsSlice.actions;
export default statisticsSlice.reducer;