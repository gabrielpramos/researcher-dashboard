import {
  EndpointType,
  getURL,
} from '../../../../constants/request-urls/request-urls';

export type AddAreaBodyType = {
  area: string;
};

export const areasRequestSettings = () =>
  new Request(
    getURL({
      endpointType: EndpointType.Areas,
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

export const addAreaRequestSettings = (body: AddAreaBodyType) =>
  new Request(
    getURL({
      endpointType: EndpointType.Areas,
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
