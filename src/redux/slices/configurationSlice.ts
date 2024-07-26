import { createSlice } from "@reduxjs/toolkit";
import { initialQuizConfig } from "../../components/initialValues/initialQuizConfig";

const configurationSlice = createSlice({
    name: 'configuration',
    initialState: {
        configuration: initialQuizConfig
    },
    reducers: {
        saveConfiguration(state, action) {
            state.configuration= action.payload;
        },
        clearConfiguration(state) {
            state.configuration = initialQuizConfig
        }
    }
});


export const {saveConfiguration, clearConfiguration} = configurationSlice.actions;
export default configurationSlice.reducer;