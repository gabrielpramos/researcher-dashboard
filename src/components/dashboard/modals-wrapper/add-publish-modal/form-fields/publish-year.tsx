import {
  Stack,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { usePublishModalFormContext } from '../publish-modal-form';

const PublishYear = () => {
  const { updateFormData } = usePublishModalFormContext();

  return (
    <Stack spacing={0}>
      <FormLabel>{texts.publishYear}</FormLabel>

      <NumberInput
        onChange={(value) => {
          updateFormData({ publishYear: value });
        }}
      >
        <NumberInputField />
      </NumberInput>
    </Stack>
  );
};

export default PublishYear;
