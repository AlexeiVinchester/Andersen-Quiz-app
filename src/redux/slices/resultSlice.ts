import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        correctAnswers: 0,
        seconds: 0
    },
    reducers: {
        incrementCorrectAnswers(state) {
            state.correctAnswers++;
        },
        clearCorrectAnswers(state) {
            state.correctAnswers = 0
        },
        incrementSeconds(state) {
            state.seconds++;
        },
        clearSeconds(state) {
            state.seconds = 0
        }
    }
});

export const { 
    incrementCorrectAnswers, 
    clearCorrectAnswers, 
    clearSeconds, 
    incrementSeconds } = resultSlice.actions;
export default resultSlice.reducer;
