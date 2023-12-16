import { FormHelperText, FormLabel, Stack } from '@chakra-ui/react';
import { usePublishModalFormContext } from '../publish-modal-form';
import { MultiValueOption } from '../../../../../models/types';
import { texts } from '../../../../../constants/texts';
import { useDataContext } from '../../../data-wrapper/data-wrapper';
import ReactSelect from 'react-select';

const CoAuthors = () => {
  const { updateFormData } = usePublishModalFormContext();
  const { userData, usersData } = useDataContext();

  const options: MultiValueOption = usersData
    .filter(({ name }) => name !== userData.name)
    .flatMap(({ name, aliases, id }) => {
      const flattenValue = [{ name, id }];

      if (aliases) {
        const mappedAliases = aliases.map((name) => ({ name, id }));
        return [...flattenValue, ...mappedAliases];
      }
      return flattenValue;
    })
    .map(({ name, id }) => ({ label: name, value: id }));

  return (
    <Stack spacing={0}>
      <FormLabel htmlFor='coAuthors' requiredIndicator>
        {texts.coAuthorsLabel}
      </FormLabel>

      <ReactSelect
        placeholder={texts.select}
        id='coAuthors'
        components={{ DropdownIndicator: null }}
        isMulti
        options={options}
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
