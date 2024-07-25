import { SAVE_CONFIGURATION } from "../../types/types";
import { QuizConfig } from "../../../components/spreadedInterfaces/quizConfig.interface";

const saveConfiguration = (payload: QuizConfig) => {
    return {
        type: SAVE_CONFIGURATION,
        payload
    }
};

export { saveConfiguration };