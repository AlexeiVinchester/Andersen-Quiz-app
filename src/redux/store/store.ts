import configurationReducer from '../slices/configurationSlice';
import { configureStore } from '@reduxjs/toolkit';

const newStore = configureStore({
    reducer: {
        configuration: configurationReducer
    }
})

export { newStore };