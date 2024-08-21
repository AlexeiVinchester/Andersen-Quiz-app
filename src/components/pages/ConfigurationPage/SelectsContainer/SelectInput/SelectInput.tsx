import { useId } from 'react';
import { SelectInputProps } from './interfaces/SelectInput.interface';

const SelectInput = ({ label, options, onChangeSelectField, ...props }: SelectInputProps): JSX.Element => {

    const selectInputId = useId();

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeSelectField((prev) => {
            return {
                ...prev,
                [label]: e.target.value
            }
        })
    };

    return (
        <div className='flex-col select-input'>
            <label className='selected-label' htmlFor={selectInputId}>Choose {label}</label>
            <select {...props} onChange={onChangeSelect} className='select-configuration'>
                {options.map(country => (
                    <option key={country.label} value={country.value}>
                        {country.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export { SelectInput };