import configurationReducer from '../slices/configurationSlice';
import resultReducer from '../slices/resultSlice';
import questionsReducer from '../slices/questionsSlice';
import loadQuestionsReducer from '../slices/loadQuestionsSlice';
import statisticsLoader from '../slices/statisticsSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'configuration',
        'result',
        'questions',
        'loadedQuestions'
    ]
};

const rootReducer = combineReducers({
    configuration: configurationReducer,
    result: resultReducer,
    questions: questionsReducer,
    loadedQuestions: loadQuestionsReducer,
    statistics: statisticsLoader
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
