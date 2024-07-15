import { useId } from 'react';
import Select from 'react-select';
import { selectInputProps } from './interfaces/SelectInput.interface';

const SelectInput = ({ label, options }: selectInputProps): JSX.Element => {

    const selectInputId = useId();

    return (
        <div className='flex-col select-input'>
            <label className='selected-label' htmlFor={selectInputId}>Choose {label}</label>
            <Select id={selectInputId} options={options} />
        </div>
    );
};

export { SelectInput };