import { FormControl, ModalBody, Stack } from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import { createContext, useContext, useEffect, useState } from 'react';
import { initialPublishFormData } from '../../../../constants/initialValues';
import {
  PublishArea,
  PublishTypes,
  CoAuthors,
  PlaceOfPublish,
  Title,
  DoiUrl,
  PublishYear,
  MainAuthorFlag,
} from './form-fields';
import HelperText from './form-fields/helper-text';
import PublishModalFooter from './publish-modal-footer/publish-modal-footer';
import { useDataContext } from '../../data-wrapper/data-wrapper';
import { addPublish } from './request/requests';
import { useLoadingContext } from '../../../loading/global-loading';
import { Modals, useModalContext } from '../modals-wrapper';
import { useGlobalToastContext } from '../../../toast/global-toast';

export interface FormData {
  title: string;
  publishType: string;
  publishArea: string;
  publishYear: string;
  mainAuthor: boolean;
  doi: string;
  coAuthors: string[];
  placeOfPublish: string;
  issn: string;
}

export const createLabel = (inputedValue: string) =>
  `${texts.addNew} ${inputedValue}`;
interface PublishModalFormContextProps {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
  submitForm: (value: boolean) => void;
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
  const { toast } = useGlobalToastContext();
  const { toggleLoading } = useLoadingContext();
  const { userData, refetch } = useDataContext();
  const { updateModal } = useModalContext();
  const [formData, setFormData] = useState<FormData>(initialPublishFormData);
  const [submit, setSubmit] = useState<boolean>(false);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData });
  };

  const submitForm = (value: boolean) => {
    setSubmit(value);
  };

  useEffect(() => {
    if (submit) {
      toggleLoading(true);
      addPublish({
        area_id: formData.publishArea,
        place_id: formData.placeOfPublish,
        type_id: formData.publishType,
        author_id: userData.id,
        coauthors_id: formData.coAuthors,
        doi: formData.doi,
        issn: formData.issn,
        publication_date: formData.publishYear,
        is_owner: formData.mainAuthor,
        title: formData.title,
      })
        .then(() => {
          toast({ title: texts.addPublishSuccess, status: 'success' });
          updateModal(Modals.None);
        })
        .catch(() => {
          setSubmit(false);
        })
        .finally(() => {
          refetch();
          toggleLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);

  return (
    <PublishModalFormContext.Provider
      value={{ formData, updateFormData, submitForm }}
    >
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
