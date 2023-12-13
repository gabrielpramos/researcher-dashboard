import { MultiValue, SingleValue } from 'react-select';

export type Value<T = string> = { value: T };
export type ValueWithId = { name: string; id: string };
export type SingleValueOption = SingleValue<Value>;

export type MultiValueOption = MultiValue<Value>;

export type UserData = {
  id: string;
  name: string;
  email: string;
  lattes: string;
  aliases: string[];
  photoUrl: string;
};

export type PublishArea = { area: string; id: string };

export type AreasData = PublishArea[];

export type PublishType = { type: string; id: string };

export type TypesData = PublishType[];

export type PlaceOfPublishData = { place: string; id: string };

export type PlacesOfPublishData = PlaceOfPublishData[];
