import {
  FC,
  HTMLAttributes,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AreasData,
  PlacesOfPublishData,
  PublishesResponseData,
  PublishesData,
  TypesData,
  UserData,
  UsersResponseData,
  UserResponseData,
} from '../../../models/types';
import useFetch from '../../../hooks/fetch';
import { useAuthContext } from '../../auth/auth-wall';
import {
  userRequestSettings,
  usersRequestSettings,
} from './data-request-settings/user-data-settings';
import { areasRequestSettings } from './data-request-settings/area-request-settings';
import { initialDataContextValues } from '../../../constants/initialValues';
import { typesRequestSettings } from './data-request-settings/types-request-settings';
import { placesOfPublishRequestSettings } from './data-request-settings/place-of-publish-request-settings';
import { getPublishRequestSettings } from './data-request-settings/publish-request-settings';
import { mapPublishResponse, mapUser } from './data-maps';

export interface DataContextValuesProps {
  publishesData: PublishesData;
  userData: UserData;
  usersData: UserData[];
  areasData: AreasData;
  typesData: TypesData;
  placesOfPublishData: PlacesOfPublishData;
}

export interface DataContextProps extends DataContextValuesProps {
  refetch: () => void;
}

const REDO_COUNT_INCREMENT_VALUE = 1;

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      'The DataContext must be used under the DataWrapper component.'
    );
  }

  return context;
};

const DataWrapper: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const {
    userInfo: { email },
  } = useAuthContext();
  const [value, setValue] = useState<DataContextValuesProps>(
    initialDataContextValues
  );
  const fetchFunction = useFetch();
  const [refetchCount, setRefetchCount] = useState<number>(0);

  const refetch = () => {
    setRefetchCount(refetchCount + REDO_COUNT_INCREMENT_VALUE);
  };

  useEffect(() => {
    Promise.all([
      fetchFunction<PublishesResponseData>(getPublishRequestSettings()),
      fetchFunction<UserResponseData>(userRequestSettings(email!)),
      fetchFunction<UsersResponseData>(usersRequestSettings()),
      fetchFunction<AreasData>(areasRequestSettings()),
      fetchFunction<TypesData>(typesRequestSettings()),
      fetchFunction<PlacesOfPublishData>(placesOfPublishRequestSettings()),
    ]).then(
      ([
        publishResponse,
        userResponse,
        usersResponse,
        areasResponse,
        typesResponse,
        placeOfPublishResponse,
      ]) => {
        setValue({
          ...value,
          publishesData: publishResponse.map(mapPublishResponse),
          userData: mapUser(userResponse),
          usersData: usersResponse.map(mapUser),
          areasData: areasResponse,
          typesData: typesResponse,
          placesOfPublishData: placeOfPublishResponse,
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchCount]);

  return (
    <DataContext.Provider value={{ ...value, refetch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataWrapper;
