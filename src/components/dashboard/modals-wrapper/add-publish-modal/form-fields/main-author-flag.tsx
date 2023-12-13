import { FormLabel, Stack, Switch } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import { usePublishModalFormContext } from '../publish-modal-form';

const MainAuthorFlag = () => {
  const { updateFormData } = usePublishModalFormContext();

  return (
    <Stack display='flex' flexFlow='row' alignItems='end' spacing={0}>
      <FormLabel htmlFor='mainAuthorFlag' mb='0'>
        {texts.mainAuthorFlag}
      </FormLabel>

      <Switch
        id='mainAuthorFlag'
        defaultChecked
        onChange={({ target: { checked } }) => {
          updateFormData({ mainAuthor: checked });
        }}
      />
    </Stack>
  );
};
export default MainAuthorFlag;
