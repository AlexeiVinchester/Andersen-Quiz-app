import { NumberInput } from "./NumberInput/NumberInput";

const NumberOfQuestionsContainer = () => {
    return (
        <>
            <NumberInput
                placeholder="Enter number of questions from 5 to 15!"
                label="Number of questions"
                min={5}
                max={15}
            />
        </>
    );
};

export { NumberOfQuestionsContainer };