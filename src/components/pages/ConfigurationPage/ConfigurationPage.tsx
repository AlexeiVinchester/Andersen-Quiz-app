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
            <NumberOfQuestionsContainer  
                placeholder="Enter number of questions from 5 to 15!"
                label="Number of questions"
                min={5}
                max={15}
                onChangeNumber={setConfiguration}
            />
            <SelectContainer onChangeSelectField={setConfiguration}/>
            <ButtonsContainer configuration={configuration}/>
        </div>
    );
};

export { ConfigurationPage };