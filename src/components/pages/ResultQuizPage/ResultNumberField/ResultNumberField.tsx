import { ResultNumberFieldProps } from "./interface/resultNumberField.interface";

const ResultNumberField = ({ value, text }: ResultNumberFieldProps) => {
    return (
        <p>
            {text}: <span>{value}</span>
        </p>
    )
}

export { ResultNumberField };
