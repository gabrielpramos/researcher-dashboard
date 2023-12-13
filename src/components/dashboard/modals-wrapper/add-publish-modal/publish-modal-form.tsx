import { FormControl, ModalBody, Stack } from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import { createContext, useContext, useState } from 'react';
import { initialPublishFormData } from '../../../../constants/initialValues';
import {
  PublishArea,
  PublishTypes,
  CoAuthors,
  PlaceOfPublish,
  Title,
  MainAuthorFlag,
  DoiUrl,
  PublishYear,
} from './form-fields';
import HelperText from './form-fields/helper-text';
import PublishModalFooter from './publish-modal-footer/publish-modal-footer';

export interface FormData {
  title: string;
  publishType: string;
  publishArea: string;
  mainAuthor: boolean;
  doi: string;
  coAuthors: string[];
  publishYear: string;
  placeOfPublish: string;
  issn: string;
}

export const createLabel = (inputedValue: string) =>
  `${texts.addNew} ${inputedValue}`;
interface PublishModalFormContextProps {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
}
const PublishModalFormContext = createContext<
  PublishModalFormContextProps | undefined
>(undefined);

export const usePublishModalFormContext = () => {
  const context = useContext(PublishModalFormContext);

  if (!context) {
    throw new Error(
      'PublishModalFormContext must be called under the PublishModalForm component.'
    );
  }

  return context;
};

const PublishModalForm = () => {
  const [formData, setFormData] = useState<FormData>(initialPublishFormData);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <PublishModalFormContext.Provider value={{ formData, updateFormData }}>
      <ModalBody maxHeight={500} overflow='auto'>
        <FormControl isRequired>
          <HelperText />

          <Stack gap={5}>
            <PublishTypes />

            <PublishArea />

            <Title />

            <CoAuthors />

            <PlaceOfPublish />

            <DoiUrl />

            <PublishYear />

            <MainAuthorFlag />
          </Stack>
        </FormControl>
      </ModalBody>

      <PublishModalFooter />
    </PublishModalFormContext.Provider>
  );
};

export default PublishModalForm;
