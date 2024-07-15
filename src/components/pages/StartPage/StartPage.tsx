import { NumberOfQuestionsContainer } from "./NumberInputContainer/NumberInputContainer";
import { SelectContainer } from "./SelectsContainer/SelectsContainer";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";

const StartPage = () => {
    return (
        <div className='start-container'>
            <NumberOfQuestionsContainer />
            <SelectContainer />
            <ButtonsContainer />
        </div>
    );
};

export { StartPage };