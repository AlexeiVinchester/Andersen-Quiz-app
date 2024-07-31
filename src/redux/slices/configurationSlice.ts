import { createSlice } from "@reduxjs/toolkit";
import { initialQuizConfig } from "../../components/initialValues/initialQuizConfig";

const configurationSlice = createSlice({
    name: 'configuration',
    initialState: {
        ...initialQuizConfig
    },
    reducers: {
        saveConfiguration(state, action) {
            const {category, difficulty, type, time} = action.payload;
            state.category = category;
            state.difficulty = difficulty;
            state.time = time;
            state.type = type;
            
        },
        clearConfiguration(state) {
            const {category, difficulty, time, type} = initialQuizConfig;
            state.category = category;
            state.difficulty = difficulty;
            state.time = time;
            state.type = type;
        }
    }
});


export const {saveConfiguration, clearConfiguration} = configurationSlice.actions;
export default configurationSlice.reducer;