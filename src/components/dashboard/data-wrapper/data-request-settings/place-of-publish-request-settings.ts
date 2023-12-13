import {
  EndpointType,
  getURL,
} from '../../../../constants/request-urls/request-urls';

export type AddPlaceOfPublishBodyType = {
  place_name: string;
};

export const placesOfPublishRequestSettings = () =>
  new Request(
    getURL({
      endpointType: EndpointType.Places,
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

export const addAreaRequestSettings = (body: AddPlaceOfPublishBodyType) =>
  new Request(
    getURL({
      endpointType: EndpointType.Places,
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
