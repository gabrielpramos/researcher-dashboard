import { FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import CreatableSelect from 'react-select/creatable';
import { createLabel, usePublishModalFormContext } from '../publish-modal-form';
import { MultiValueOption } from '../../../../../models/types';
import { texts } from '../../../../../constants/texts';
import { useDataContext } from '../../../data-wrapper/data-wrapper';

const CoAuthors = () => {
  const { updateFormData } = usePublishModalFormContext();
  const { userData, usersData } = useDataContext();

  const options: MultiValueOption = usersData
    .filter(({ name }) => name !== userData.name)
    .flatMap(({ name, aliases }) => {
      const flattenValue = [name];

      if (aliases) {
        return [...flattenValue, ...aliases];
      }
      return flattenValue;
    })
    .map((name) => ({ label: name, value: name }));

  return (
    <Stack spacing={0}>
      <FormLabel htmlFor='coAuthors'>{texts.coAuthorsLabel}</FormLabel>

      <CreatableSelect
        placeholder={texts.select}
        id='coAuthors'
        components={{ DropdownIndicator: null }}
        isMulti
        options={options}
        formatCreateLabel={createLabel}
        onChange={(newValue: MultiValueOption) => {
          updateFormData({
            coAuthors: newValue.map(({ value }) => value),
          });
        }}
        noOptionsMessage={() => texts.inputAndPressEnterOrTab}
        openMenuOnFocus
      />
      <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
    </Stack>
  );
};

export default CoAuthors;
