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

export type PlaceOfPublishData = { place_name: string; id: string };

export type PlacesOfPublishData = PlaceOfPublishData[];

export type PublishResponseData = {
  title: string;
  issn: string;
  author_is_owner: boolean;
  area_id: string;
  place_id: string;
  id: string;
  doi: string;
  author_id: string;
  type_id: string;
  publication_date: string;
  author: UserData;
  place_of_publication: PlaceOfPublishData;
  area: PublishArea;
  type: PublishType;
};

export type PublishesResponseData = PublishResponseData[];

export type PublishData = {
  title: string;
  issn: string;
  authorIsOwner: boolean;
  areaId: string;
  placeId: string;
  id: string;
  doi: string;
  authorId: string;
  typeId: string;
  publicationDate: string;
  author: UserData;
  placeOfPublication: PlaceOfPublishData;
  area: PublishArea;
  type: PublishType;
};

export type PublishesData = PublishData[];
