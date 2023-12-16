import {
  Stack,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { usePublishModalFormContext } from '../publish-modal-form';

const JANUARY_DATE_NUMBER_VALUE = 1;
const FIRST_DAY_VALUE = 1;

const PublishYear = () => {
  const { updateFormData } = usePublishModalFormContext();

  return (
    <Stack spacing={0}>
      <FormLabel htmlFor='publishYear'>{texts.publishYear}</FormLabel>

      <NumberInput
        name='publishYear'
        id='publishYear'
        onChange={(value) => {
          updateFormData({
            publishYear: `${value}-${JANUARY_DATE_NUMBER_VALUE}-${FIRST_DAY_VALUE}`,
          });
        }}
      >
        <NumberInputField />
      </NumberInput>
    </Stack>
  );
};

export default PublishYear;
