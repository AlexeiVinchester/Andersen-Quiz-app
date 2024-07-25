import { useId } from "react";
import { NumberInputProps } from "./interfaces/NumberInput.interface";

const NumberInput = ({placeholder, label, min, max}: NumberInputProps) => {

    const inputId = useId();

    return (
        <div className="number-input-container">
            <label htmlFor={inputId} className="number-input-label">{label}</label>
            <input type="number" min={min} max={max} id={inputId} className="form-control" placeholder={placeholder} />
        </div>
    );
};

export { NumberInput };