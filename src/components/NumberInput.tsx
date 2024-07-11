import { useId } from "react";

const NumberInput = () => {

    const inputId = useId();

    return (
        <div className="number-input-container">
            <label htmlFor={inputId} className="number-input-label">Please, enter number of questions!</label>
            <input id={inputId} className="form-control" placeholder="enter number of questions from 5 to 15" />
        </div>
    );
};

export { NumberInput };