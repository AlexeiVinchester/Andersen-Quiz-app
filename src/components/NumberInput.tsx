import { useId } from "react";

export interface numberInputProps {
    placeholder: string,
    label: string,
    min: number,
    max: number
}

const NumberInput = ({placeholder, label, min, max}: numberInputProps) => {

    const inputId = useId();

    return (
        <div className="number-input-container">
            <label htmlFor={inputId} className="number-input-label">{label}</label>
            <input type="number" min={min} max={max} id={inputId} className="form-control" placeholder={placeholder} />
        </div>
    );
};

export { NumberInput };