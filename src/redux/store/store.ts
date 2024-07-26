import configurationReducer from '../slices/configurationSlice';
import resultReducer from '../slices/resultSlice';
import questionsReducer from '../slices/questionsSlice';
import { configureStore } from '@reduxjs/toolkit';

const newStore = configureStore({
    reducer: {
        configuration: configurationReducer,
        result: resultReducer,
        questions: questionsReducer
    }
});

export { newStore };