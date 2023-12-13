import { FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import CreatableSelect from 'react-select/creatable';
import { createLabel, usePublishModalFormContext } from '../publish-modal-form';
import { SingleValueOption } from '../../../../../models/types';

const PlaceOfPublish = () => {
  const { updateFormData } = usePublishModalFormContext();

  return (
    <Stack>
      <FormLabel htmlFor='placeOfPublish'>
        {texts.placeOfPublishLabel}
      </FormLabel>

      <CreatableSelect
        placeholder={texts.select}
        id='placeOfPublish'
        formatCreateLabel={createLabel}
        onChange={(newValue: SingleValueOption) => {
          updateFormData({
            placeOfPublish: newValue?.value ?? '',
          });
        }}
        noOptionsMessage={() => texts.inputAndPressEnterOrTab}
      />
      <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
    </Stack>
  );
};

export default PlaceOfPublish;
