import { Button, HStack, ModalFooter } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { Modals, useModalContext } from '../../modals-wrapper';
import { useDataContext } from '../../../data-wrapper/data-wrapper';
import { usePublishModalFormContext } from '../publish-modal-form';
import { addNewInputs } from '../request/requests';

const PublishModalFooter = () => {
  const { formData, updateFormData, submitForm } = usePublishModalFormContext();
  const { updateModal } = useModalContext();
  const { areasData, typesData, placesOfPublishData, refetch } =
    useDataContext();

  const onClick = () => {
    addNewInputs({
      formData,
      typesData,
      areasData,
      placesOfPublishData,
    })
      .then(({ area_id, place_id, type_id }) => {
        updateFormData({
          ...formData,
          publishArea: area_id,
          placeOfPublish: place_id,
          publishType: type_id,
        });
      })
      .then(() => {
        submitForm(true);
      })
      .catch(() => {
        refetch();
      });
  };

  return (
    <ModalFooter>
      <HStack gap={4}>
        <Button
          type='button'
          onClick={() => {
            updateModal(Modals.None);
          }}
        >
          {texts.cancel}
        </Button>

        <Button type='button' colorScheme='orange' onClick={onClick}>
          {texts.submitAddPublish}
        </Button>
      </HStack>
    </ModalFooter>
  );
};

export default PublishModalFooter;
