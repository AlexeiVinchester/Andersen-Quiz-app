import { useId } from 'react';
import Select from 'react-select';
import { SelectInputProps } from './interfaces/SelectInput.interface';

const SelectInput = ({ label, options }: SelectInputProps): JSX.Element => {

    const selectInputId = useId();

    return (
        <div className='flex-col select-input'>
            <label className='selected-label' htmlFor={selectInputId}>Choose {label}</label>
            <Select 
                id={selectInputId} 
                options={options} 
                onChange={(e) => {console.log(`Field: ${label} --- ${e?.value}`)}}
            />
        </div>
    );
};

export { SelectInput };