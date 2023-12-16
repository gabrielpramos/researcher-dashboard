import {
  EndpointType,
  getURL,
} from '../../../../constants/request-urls/request-urls';

export type AddPublishBodyType = {
  title: string;
  type_id: string;
  area_id: string;
  doi: string;
  issn: string;
  author_id: string;
  coauthors_id: string[];
  publication_date: string;
  place_id: string;
  is_owner: boolean;
};

export type PublishResponseType = {
  title: string;
  doi: string;
  issn: string;
  author_id: string;
  coauthors_id: string;
  publication_date: string;
  type_id: string;
  area_id: string;
  place_id: string;
  id: string;
};

export const getPublishRequestSettings = () =>
  new Request(
    getURL({
      endpointType: EndpointType.Paper,
    }),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );

export const addPublishRequestSettings = (body: AddPublishBodyType) =>
  new Request(
    getURL({
      endpointType: EndpointType.Paper,
    }),
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );
