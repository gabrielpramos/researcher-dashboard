import { FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import CreatableSelect from 'react-select/creatable';
import {
  MultiValueOption,
  SingleValueOption,
} from '../../../../../models/types';
import { texts } from '../../../../../constants/texts';
import { createLabel, usePublishModalFormContext } from '../publish-modal-form';
import { useDataContext } from '../../../data-wrapper/data-wrapper';

const PublishArea = () => {
  const { updateFormData } = usePublishModalFormContext();
  const { areasData } = useDataContext();

  const options: MultiValueOption = areasData.map(({ area, id }) => ({
    label: area,
    value: id,
  }));

  return (
    <Stack>
      <FormLabel htmlFor='publishArea'>{texts.publishAreaLabel}</FormLabel>

      <CreatableSelect
        placeholder={texts.select}
        id='publishAreaLabel'
        options={options}
        formatCreateLabel={createLabel}
        onChange={(newValue: SingleValueOption) => {
          updateFormData({
            publishArea: newValue?.value ?? '',
          });
        }}
        noOptionsMessage={() => texts.inputAndPressEnterOrTab}
      />
      <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
    </Stack>
  );
};

export default PublishArea;
