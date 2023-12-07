import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  ModalFooter,
  Stack,
  Button,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { useAuthContext } from '../../auth/auth-wall';
import { texts } from '../../../constants/texts';
import ProfileInfoForm from './profile-info-form/profile-info-form';

export interface FormData {
  name: string;
  email: string;
  lattes: string;
  aliases: string[];
  photoUrl: string;
}

const LATTES_URL_REGEX = /htt(p|ps):\/\/(www\.|)lattes\.cnpq\.br\/[0-9]+/;

const FirstSignInModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userInfo } = useAuthContext();

  const initialValue: FormData = {
    name: userInfo.displayName!,
    aliases: [],
    email: userInfo.email!,
    lattes: '',
    photoUrl: '',
  };
  const [formData, setFormData] = useState<FormData>(initialValue);
  const validForm =
    formData.lattes.length > 0 && LATTES_URL_REGEX.test(formData.lattes);

  const updateFormData = (newFormData: FormData) => {
    setFormData(newFormData);
  };

  useEffect(() => {
    setFormData({ ...formData, photoUrl: userInfo.photoURL! });
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size='xl'
    >
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(3px) hue-rotate(10deg)'
      />

      <ModalContent minWidth='1000px'>
        <ModalHeader>{`${texts.helloResearcher} ${userInfo.displayName}`}</ModalHeader>

        <ModalBody>
          <Stack spacing={5}>
            <Text>{texts.confirmYourProfileInfoMessage}</Text>

            <ProfileInfoForm
              formData={formData}
              updateFormData={updateFormData}
              validField={validForm}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            type='button'
            colorScheme='orange'
            isDisabled={!validForm}
            onClick={() => {
              localStorage.setItem('verifiedAccount', 'verified');
              onClose();
            }}
          >
            {texts.submitConfirmation}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FirstSignInModal;
