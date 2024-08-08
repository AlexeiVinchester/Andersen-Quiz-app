import { createSlice } from "@reduxjs/toolkit";
import { initialQuizConfig } from "../../components/initialValues/initialQuizConfig";

const configurationSlice = createSlice({
    name: 'configuration',
    initialState: {
        ...initialQuizConfig
    },
    reducers: {
        saveConfiguration(state, action) {
            const {category, difficulty, type, time, amount} = action.payload;
            state.category = category;
            state.difficulty = difficulty;
            state.time = time;
            state.type = type;
            state.amount = amount;
            
        },
        clearConfiguration(state) {
            const {category, difficulty, time, type, amount} = initialQuizConfig;
            state.category = category;
            state.difficulty = difficulty;
            state.time = time;
            state.type = type;
            state.amount = amount
        }
    }
});


export const {saveConfiguration, clearConfiguration} = configurationSlice.actions;
export default configurationSlice.reducer;