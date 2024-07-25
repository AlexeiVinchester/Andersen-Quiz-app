import { SelectInput } from "./SelectInput/SelectInput";
import { categories, difficulties, types, times } from "./options/options";
import { SelectContainerProps } from "./interface/selectsContainer.interface";

const SelectContainer = ({onChangeSelectField}: SelectContainerProps) => {
    return (
        <div className="flex-row select-container">
            <SelectInput onChangeSelectField={onChangeSelectField} label="category" options={categories} />
            <SelectInput onChangeSelectField={onChangeSelectField} label="difficulty" options={difficulties} />
            <SelectInput onChangeSelectField={onChangeSelectField} label="type" options={types} />
            <SelectInput onChangeSelectField={onChangeSelectField} label="time" options={times} />
        </div>
    );
};

export { SelectContainer };