import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  ModalFooter,
  Button,
  useDisclosure,
  Icon,
  HStack,
  Text,
} from '@chakra-ui/react';

import { texts } from '../../../../constants/texts';
import { useEffect } from 'react';
import { Modals, useModalContext } from '../modals-wrapper';
import PublushModalForm from './publish-modal-form';
import { GoPlusCircle } from 'react-icons/go';

const AddPublishModal = () => {
  const { updateModal } = useModalContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <PublushModalForm />
      </ModalContent>
    </Modal>
  );
};
export default AddPublishModal;
