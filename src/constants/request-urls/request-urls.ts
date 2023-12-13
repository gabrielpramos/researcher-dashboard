export enum EndpointType {
  Collab = 'collab/',
  Areas = 'areas/',
  Paper = 'paper/',
  Types = 'types/',
  Places = 'places/',
}

type GetUrlParamsType = { endpointType: EndpointType; params?: string[] };
type GetUrlType = (params: GetUrlParamsType) => string;

export const getURL: GetUrlType = ({ endpointType, params }) =>
  `${process.env.REACT_APP_BACK_END_URL!}${endpointType}${
    params ? params.reduce((acc, cur) => `${acc}/${cur}`) : ''
  }`;
