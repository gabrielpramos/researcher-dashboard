import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { texts } from '../../../../constants/texts';
import CreatableSelect from 'react-select/creatable';
import { FormData } from '../first-signin-modal';
import { MultiValueOption } from '../../../../models/types';

interface ProfileInfoFormProps {
  formData: FormData;
  updateFormData: (newFormData: FormData) => void;
  validField: boolean;
}

const ProfileInfoForm: FC<ProfileInfoFormProps> = ({
  formData,
  updateFormData,
  validField,
}) => {
  const { name, email, lattes } = formData;

  return (
    <Stack spacing={3}>
      <FormControl isInvalid={!validField} isRequired>
        <FormLabel>{texts.lattesUrl}</FormLabel>

        <Input
          type='url'
          variant='outline'
          name='lattes-url'
          placeholder={texts.lattesUrlPlaceholder}
          value={lattes}
          autoComplete='url'
          onChange={({ target: { value } }) => {
            updateFormData({ ...formData, lattes: value });
          }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>{texts.displayName}</FormLabel>

        <Input
          isInvalid={false}
          type='text'
          variant='filled'
          isDisabled
          value={name}
        />
      </FormControl>

      <FormControl>
        <FormLabel>{texts.email}</FormLabel>

        <Input
          isInvalid={false}
          type='email'
          variant='filled'
          isDisabled
          value={email}
        />
      </FormControl>

      <FormControl>
        <FormLabel>{texts.aliases}</FormLabel>

        <CreatableSelect
          placeholder={texts.select}
          components={{ DropdownIndicator: null }}
          isMulti
          formatCreateLabel={(inputedValue) =>
            `${texts.addNew} ${inputedValue}`
          }
          onChange={(newValue: MultiValueOption) => {
            updateFormData({
              ...formData,
              aliases: newValue.map(({ value }) => value),
            });
          }}
          noOptionsMessage={() => texts.inputAndPressEnterOrTab}
          openMenuOnFocus
        />
      </FormControl>
    </Stack>
  );
};

export default ProfileInfoForm;
