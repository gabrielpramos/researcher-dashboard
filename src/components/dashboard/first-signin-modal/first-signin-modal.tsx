import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  ModalFooter,
  Stack,
  Button,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { useAuthContext } from '../../auth/auth-wall';
import { texts } from '../../../constants/texts';
import ProfileInfoForm from './profile-info-form/profile-info-form';
import useFetch from '../../../hooks/fetch';
import { useLoadingContext } from '../../loading/global-loading';
import {
  EndpointType,
  getURL,
} from '../../../constants/request-urls/request-urls';
import useModalStartup from '../../../hooks/modal';

export interface FormData {
  name: string;
  email: string;
  lattes: string;
  aliases: string[];
  photoUrl: string;
}

const LATTES_URL_REGEX = /htt(p|ps):\/\/(www\.|)lattes\.cnpq\.br\/[0-9]+/;

const FirstSignInModal: FC = () => {
  const { userInfo } = useAuthContext();
  const { isOpen, onClose } = useModalStartup(() => {
    setFormData({ ...formData, photoUrl: userInfo.photoURL! });
  });
  const { toggleLoading } = useLoadingContext();
  const fetchFunction = useFetch();

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

  const onSubmit = () => {
    const request = new Request(getURL({ endpointType: EndpointType.Collab }), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        lattes: formData.lattes,
        aliases: formData.aliases,
        profile_pic_url: formData.photoUrl,
      }),
    });

    toggleLoading(true);

    fetchFunction(request)
      .then((data) => {
        localStorage.setItem('verifiedAccount', 'verified');
        onClose();
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        toggleLoading(false);
      });
  };

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
            type='submit'
            colorScheme='orange'
            isDisabled={!validForm}
            onClick={onSubmit}
          >
            {texts.submitConfirmation}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FirstSignInModal;
