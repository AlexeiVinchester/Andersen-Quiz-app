import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'result',
    initialState: {
        correctAnswers: 0
    },
    reducers: {
        incrementCorrectAnswers(state) {
            state.correctAnswers++;
        }
    }
});

export const { incrementCorrectAnswers } = resultSlice.actions;
export default resultSlice.reducer;