import configurationReducer from '../slices/configurationSlice';
import resultReducer from '../slices/resultSlice';
import { configureStore } from '@reduxjs/toolkit';

const newStore = configureStore({
    reducer: {
        configuration: configurationReducer,
        result: resultReducer
    }
});

export { newStore };