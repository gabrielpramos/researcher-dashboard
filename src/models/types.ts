import { MultiValue, SingleValue } from 'react-select';

export type Value = { value: string };
export type SingleValueOption = SingleValue<Value>;
export type MultiValueOption = MultiValue<Value>;
