import {
  EndpointType,
  getURL,
} from '../../../../constants/request-urls/request-urls';

export const userRequestSettings = (email: string) =>
  new Request(
    getURL({
      endpointType: EndpointType.Collab,
      params: ['email', email],
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

export const usersRequestSettings = () =>
  new Request(
    getURL({
      endpointType: EndpointType.Collab,
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
