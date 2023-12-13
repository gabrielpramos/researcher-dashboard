import {
  EndpointType,
  getURL,
} from '../../../../constants/request-urls/request-urls';

export type AddTypeBodyType = {
  type: string;
};

export const typesRequestSettings = () =>
  new Request(
    getURL({
      endpointType: EndpointType.Types,
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

export const addTypeRequestSettings = (body: AddTypeBodyType) =>
  new Request(
    getURL({
      endpointType: EndpointType.Types,
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
