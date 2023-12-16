import { FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import CreatableSelect from 'react-select/creatable';
import { createLabel, usePublishModalFormContext } from '../publish-modal-form';
import {
  MultiValueOption,
  SingleValueOption,
} from '../../../../../models/types';
import { useDataContext } from '../../../data-wrapper/data-wrapper';

const PlaceOfPublish = () => {
  const { updateFormData } = usePublishModalFormContext();
  const { placesOfPublishData } = useDataContext();

  const options: MultiValueOption = placesOfPublishData.map(
    ({ id, place_name }) => ({ value: id, label: place_name })
  );

  return (
    <Stack>
      <FormLabel htmlFor='placeOfPublish'>
        {texts.placeOfPublishLabel}
      </FormLabel>

      <CreatableSelect
        placeholder={texts.select}
        id='placeOfPublish'
        options={options}
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
