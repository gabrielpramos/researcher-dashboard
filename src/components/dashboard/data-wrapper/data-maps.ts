import {
  PublishData,
  PublishResponseData,
  UserData,
  UserResponseData,
} from '../../../models/types';

type MapPublishResponse = (params: PublishResponseData) => PublishData;
export const mapPublishResponse: MapPublishResponse = ({
  title,
  issn,
  author_is_owner,
  area_id,
  place_id,
  id,
  doi,
  author_id,
  type_id,
  publication_date,
  author,
  place_of_publication,
  area,
  type,
}) => ({
  title: title,
  issn: issn,
  authorIsOwner: author_is_owner,
  areaId: area_id,
  placeId: place_id,
  id: id,
  doi: doi,
  authorId: author_id,
  typeId: type_id,
  publicationDate: publication_date,
  author: author,
  placeOfPublication: place_of_publication,
  area: area,
  type: type,
});

export type MapUser = (userResponseData: UserResponseData) => UserData;
export const mapUser: MapUser = ({ profile_pic_url, ...restData }) => ({
  ...restData,
  photoUrl: profile_pic_url,
});
