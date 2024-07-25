import { combineReducers } from "redux";
import { configurationReducer } from "../configurationReducer/configurationReducer";

const rootReducer = combineReducers({
    configuration: configurationReducer,
});

export { rootReducer };