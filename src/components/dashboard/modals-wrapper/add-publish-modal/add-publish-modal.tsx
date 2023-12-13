import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Icon,
  HStack,
  Text,
} from '@chakra-ui/react';

import { texts } from '../../../../constants/texts';
import { Modals, useModalContext } from '../modals-wrapper';
import PublishModalForm from './publish-modal-form';
import { GoPlusCircle } from 'react-icons/go';
import useModalStartup from '../../../../hooks/modal';

const AddPublishModal = () => {
  const { updateModal } = useModalContext();
  const { isOpen, onClose } = useModalStartup();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        updateModal(Modals.None);
        onClose();
      }}
      isCentered
      size='xl'
    >
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(3px) hue-rotate(10deg)'
      />

      <ModalContent minWidth='1000px'>
        <ModalHeader>
          <HStack>
            <Icon as={GoPlusCircle} />
            <Text>{texts.addPublish}</Text>
          </HStack>
        </ModalHeader>

        <PublishModalForm />
      </ModalContent>
    </Modal>
  );
};
export default AddPublishModal;
