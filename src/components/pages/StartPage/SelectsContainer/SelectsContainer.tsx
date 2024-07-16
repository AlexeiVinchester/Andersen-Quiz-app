import { SelectInput } from "./SelectInput/SelectInput";
import { categories, difficulties, types, times } from "./options/options";

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