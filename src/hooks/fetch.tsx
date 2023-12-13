export type FetchFunction = <T>(request: Request) => Promise<T>;
export type UseFetchType = () => FetchFunction;

const fetchFunction: FetchFunction = async (request: Request) =>
  fetch(request).then((response) => response.json());

const useFetch: UseFetchType = () => {
  return fetchFunction;
};

export default useFetch;
