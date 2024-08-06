import { useId } from "react";
import { NumberInputContainerProps } from "./interfaces/NumberInputContainer.interface";

const NumberOfQuestionsContainer = ({ placeholder, label, min, max, onChangeNumber }: NumberInputContainerProps) => {
    const inputId = useId();

    const onChangeNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeNumber((prev) => {
            return {
                ...prev,
                amount: +e.target.value
            };
        })
    };

    return (
        <div className="number-input-container">
            <label htmlFor={inputId} className="number-input-label">{label}</label>
            <input
                type="number"
                min={min}
                max={max}
                id={inputId}
                className="form-control"
                placeholder={placeholder}
                onChange={onChangeNumberHandler}
            />
        </div>
    );
};

export { NumberOfQuestionsContainer };