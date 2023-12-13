import { Stack, FormLabel, Input, Flex } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { usePublishModalFormContext } from '../publish-modal-form';

const DoiUrl = () => {
  const { updateFormData } = usePublishModalFormContext();

  return (
    <Flex width='100%' gap={4}>
      <Stack spacing={0} width='100%'>
        <FormLabel requiredIndicator htmlFor='numberOfISSN'>
          {texts.issnNumberLabel}
        </FormLabel>

        <Input
          type='text'
          name='numberOfISSN'
          id='numberOfISSN'
          onChange={({ target: { value } }) => {
            updateFormData({ issn: value });
          }}
        />
      </Stack>

      <Stack spacing={0} width='100%'>
        <FormLabel requiredIndicator htmlFor='doiUrl'>
          {texts.doiUrlLabel}
        </FormLabel>

        <Input
          type='url'
          name='doiUrl'
          id='doiUrl'
          onChange={({ target: { value } }) => {
            updateFormData({ doi: value });
          }}
        />
      </Stack>
    </Flex>
  );
};

export default DoiUrl;
