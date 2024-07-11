import { useId } from 'react';
import Select from 'react-select';

type Option = {
    value: string,
    label: string
};

const SelectInput = ({label, options}: {label: string, options: Option[]}) => {
    
    const selectInputId = useId();

    return (
        <div className='flex-col select-input'>
            <label className='selected-label' htmlFor={selectInputId}>Choose {label}</label>
            <Select id={selectInputId} options={options} />
        </div>
    );
};

export { SelectInput };