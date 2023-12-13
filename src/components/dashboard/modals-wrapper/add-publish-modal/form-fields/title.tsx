import { FormLabel, Input, Stack } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { usePublishModalFormContext } from '../publish-modal-form';

const Title = () => {
  const { updateFormData } = usePublishModalFormContext();

  return (
    <Stack spacing={0}>
      <FormLabel>{texts.title}</FormLabel>

      <Input
        type='text'
        name='title'
        onChange={({ target: { value } }) => {
          updateFormData({ title: value });
        }}
      />
    </Stack>
  );
};

export default Title;
