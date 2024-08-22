import { Option } from "./option.interface";

const categories: Option[] = [
    { value: 'sports', label: 'Sports' },
    { value: 'geography', label: 'Geography' },
    { value: 'vehicles', label: 'Vehicles' },
];
const difficulties: Option[] = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];
const types: Option[] = [
    { value: 'boolean', label: 'Boolean' },
    { value: 'group', label: 'Group' },
];
const times: Option[] = [
    { value: '1m', label: '1m' },
    { value: '2m', label: '2m' },
    { value: '5m', label: '5m' },
];

export { categories, difficulties, types, times };