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
  TypesData,
  UserData,
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

export interface DataContextProps {
  userData: UserData;
  usersData: UserData[];
  areasData: AreasData;
  typesData: TypesData;
  placesOfPublishData: PlacesOfPublishData;
}

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
  const [value, setValue] = useState<DataContextProps>(
    initialDataContextValues
  );
  const fetchFunction = useFetch();

  useEffect(() => {
    Promise.all([
      fetchFunction<UserData>(userRequestSettings(email!)),
      fetchFunction<UserData[]>(usersRequestSettings()),
      fetchFunction<AreasData>(areasRequestSettings()),
      fetchFunction<TypesData>(typesRequestSettings()),
      fetchFunction<PlacesOfPublishData>(placesOfPublishRequestSettings()),
    ]).then(
      ([
        userResponse,
        usersResponse,
        areasResponse,
        typesResponse,
        placeOfPublishResponse,
      ]) => {
        setValue({
          ...value,
          userData: userResponse,
          usersData: usersResponse,
          areasData: areasResponse,
          typesData: typesResponse,
          placesOfPublishData: placeOfPublishResponse,
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataWrapper;
