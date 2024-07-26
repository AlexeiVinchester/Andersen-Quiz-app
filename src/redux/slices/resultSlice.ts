import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        correctAnswers: 0
    },
    reducers: {
        incrementCorrectAnswers(state) {
            state.correctAnswers++;
        },
        clearCorrectAnswers(state) {
            state.correctAnswers = 0
        }

    }
});

export const { incrementCorrectAnswers, clearCorrectAnswers } = resultSlice.actions;
export default resultSlice.reducer;