import { SAVE_CONFIGURATION } from "../../types/types";
import { QuizConfig } from "../../../components/spreadedInterfaces/quizConfig.interface";
import { SaveConfigurationAction } from "../../actions/saveConfiguration/interface/saveConfigurationAction";
import { initialQuizConfig } from "../../../components/initialValues/initialQuizConfig";

const configurationReducer = (state: QuizConfig = initialQuizConfig, action: SaveConfigurationAction) => {
    switch (action.type) {
        default: 
            return state;
        case SAVE_CONFIGURATION: 
            return {
                ...state,
                ...action.payload
            };
    }
};

export { configurationReducer };