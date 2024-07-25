import { NumberOfQuestionsContainer } from "./NumberInputContainer/NumberInputContainer";
import { SelectContainer } from "./SelectsContainer/SelectsContainer";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";

const ConfigurationPage = () => {
    
    return (
        <div className='configuration-page page-container'>
            <NumberOfQuestionsContainer />
            <SelectContainer />
            <ButtonsContainer />
        </div>
    );
};

export { ConfigurationPage };