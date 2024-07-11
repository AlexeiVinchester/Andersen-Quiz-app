import { SelectInput } from "./SelectInput";
import { Option } from "./SelectInput";

const categories: Option[] = [
    { value: 'example', label: 'Example' },
];
const difficulties: Option[] = [
    { value: 'example', label: 'Example' },
];
const types: Option[] = [
    { value: 'example', label: 'Example' },
];
const times: Option[] = [
    { value: '1m', label: '1m' },
    { value: '2m', label: '2m' },
    { value: '5m', label: '5m' },
];

const SelectContainer = () => {
    return (
        <div className="flex-row select-container">
            <SelectInput label="category" options={categories} />
            <SelectInput label="difficulty" options={difficulties} />
            <SelectInput label="type" options={types} />
            <SelectInput label="time" options={times} />
        </div>
    );
};

export { SelectContainer };