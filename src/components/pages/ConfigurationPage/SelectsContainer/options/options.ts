import { Option } from "./option.interface";

const categories: Option[] = [
    { value: 'sport', label: 'Sport' },
    { value: 'programming', label: 'Programming' },
    { value: 'travelling', label: 'Travelling' },
];
const difficulties: Option[] = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];
const types: Option[] = [
    { value: 'boolean', label: 'boolean' },
    { value: 'group', label: 'group' },
];
const times: Option[] = [
    { value: '1m', label: '1m' },
    { value: '2m', label: '2m' },
    { value: '5m', label: '5m' },
];

export { categories, difficulties, types, times };