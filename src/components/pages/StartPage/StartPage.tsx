import { NumberOfQuestionsContainer } from "./NumberInputContainer/NumberInputContainer";
import { SelectContainer } from "./SelectsContainer/SelectsContainer";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";

const StartPage = () => {
    return (
        <div className='start-page page-container'>
            <NumberOfQuestionsContainer />
            <SelectContainer />
            <ButtonsContainer />
        </div>
    );
};

export { StartPage };