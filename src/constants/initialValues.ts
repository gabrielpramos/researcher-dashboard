import { DataContextProps } from '../components/dashboard/data-wrapper/data-wrapper';
import { UserData } from '../models/types';

export const initialPublishFormData = {
  title: '',
  doi: '',
  publishType: '',
  publishArea: '',
  mainAuthor: true,
  coAuthors: [],
  publishYear: '',
  placeOfPublish: '',
  issn: '',
};

export const initialDataContextValues: DataContextProps = {
  userData: {} as UserData,
  usersData: [],
  areasData: [],
  typesData: [],
  placesOfPublishData: [],
};
