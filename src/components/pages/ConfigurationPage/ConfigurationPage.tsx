import { useState } from "react";
import { NumberOfQuestionsContainer } from "./NumberInputContainer/NumberInputContainer";
import { SelectContainer } from "./SelectsContainer/SelectsContainer";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import { initialQuizConfig } from "../../initialValues/initialQuizConfig";
import { QuizConfig } from "../../spreadedInterfaces/quizConfig.interface";


const ConfigurationPage = () => {
    const [configuration, setConfiguration] = useState<QuizConfig>(initialQuizConfig);

    return (
        <div className='configuration-page page-container'>
            <NumberOfQuestionsContainer />
            <SelectContainer onChangeSelectField={setConfiguration}/>
            <ButtonsContainer configuration={configuration}/>
        </div>
    );
};

export { ConfigurationPage };