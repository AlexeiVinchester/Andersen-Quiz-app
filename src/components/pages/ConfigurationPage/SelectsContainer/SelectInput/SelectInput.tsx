import { useId } from 'react';
import Select from 'react-select';
import { SelectInputProps } from './interfaces/SelectInput.interface';
import { SingleValue } from 'react-select';
import { Option } from '../options/option.interface';

const SelectInput = ({ label, options, onChangeSelectField }: SelectInputProps): JSX.Element => {

    const selectInputId = useId();

    const onChangeHandler = (e: SingleValue<Option>) => {
        onChangeSelectField((prev) => {
            return {
                ...prev,
                [label]: e?.value
            }
        });
    };

    return (
        <div className='flex-col select-input'>
            <label className='selected-label' htmlFor={selectInputId}>Choose {label}</label>
            <Select 
                id={selectInputId} 
                options={options} 
                onChange={onChangeHandler}
            />
        </div>
    );
};

export { SelectInput };