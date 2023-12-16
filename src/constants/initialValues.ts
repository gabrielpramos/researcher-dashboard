import { DataContextValuesProps } from '../components/dashboard/data-wrapper/data-wrapper';
import { UserData } from '../models/types';
import { FormData } from '../components/dashboard/modals-wrapper/add-publish-modal/publish-modal-form';

export const initialPublishFormData: FormData = {
  title: '',
  doi: '',
  publishType: '',
  publishArea: '',
  publishYear: '',
  mainAuthor: true,
  coAuthors: [],
  placeOfPublish: '',
  issn: '',
};

export const initialDataContextValues: DataContextValuesProps = {
  publishesData: [],
  userData: {} as UserData,
  usersData: [],
  areasData: [],
  typesData: [],
  placesOfPublishData: [],
};
