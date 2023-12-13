import { Button, HStack, ModalFooter } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { Modals, useModalContext } from '../../modals-wrapper';
import { useDataContext } from '../../../data-wrapper/data-wrapper';
import { usePublishModalFormContext } from '../publish-modal-form';
import { addNewInputs, addPublish } from '../request/requests';

const PublishModalFooter = () => {
  const { formData } = usePublishModalFormContext();
  const { updateModal } = useModalContext();
  const { userData, areasData, typesData, placesOfPublishData } =
    useDataContext();

  const onClick = () => {
    addNewInputs({
      formData,
      typesData,
      areasData,
      placesOfPublishData,
    }).then(({ area_id, place_id, type_id }) => {
      addPublish({
        area_id,
        place_id,
        type_id,
        author_id: userData.id,
        coauthors_id: formData.coAuthors,
        doi: formData.doi,
        issn: formData.issn,
        main_author: formData.mainAuthor,
        publication_date: formData.publishYear,
        title: formData.title,
      });
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
