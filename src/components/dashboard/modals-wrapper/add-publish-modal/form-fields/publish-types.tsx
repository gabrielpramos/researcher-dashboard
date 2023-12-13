import { FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import CreatableSelect from 'react-select/creatable';
import { createLabel, usePublishModalFormContext } from '../publish-modal-form';
import {
  MultiValueOption,
  SingleValueOption,
} from '../../../../../models/types';
import { texts } from '../../../../../constants/texts';
import { useDataContext } from '../../../data-wrapper/data-wrapper';

const PublishTypes = () => {
  const { updateFormData } = usePublishModalFormContext();
  const { typesData } = useDataContext();
  const options: MultiValueOption = typesData.map(({ type, id }) => ({
    label: type,
    value: id,
  }));

  return (
    <Stack>
      <FormLabel htmlFor='publishTypes'>{texts.publishTypeLabel}</FormLabel>

      <CreatableSelect
        placeholder={texts.select}
        id='publishTypes'
        options={options}
        formatCreateLabel={createLabel}
        onChange={(newValue: SingleValueOption) => {
          updateFormData({
            publishType: newValue?.value ?? '',
          });
        }}
        noOptionsMessage={() => texts.inputAndPressEnterOrTab}
      />
      <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
    </Stack>
  );
};

export default PublishTypes;
