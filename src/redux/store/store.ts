import configurationReducer from '../slices/configurationSlice';
import resultReducer from '../slices/resultSlice';
import questionsReducer from '../slices/questionsSlice';
import loadQuestionsReducer from '../slices/loadQuestionsSlice';
import statisticsLoader from '../slices/statisticsSlice';
import { configureStore } from '@reduxjs/toolkit';


const newStore = configureStore({
    reducer: {
        configuration: configurationReducer,
        result: resultReducer,
        questions: questionsReducer,
        loadedQuestions: loadQuestionsReducer,
        statistics: statisticsLoader
    }
});

export type RootState = ReturnType<typeof newStore.getState>
export type AppDispatch = typeof newStore.dispatch

export { newStore };