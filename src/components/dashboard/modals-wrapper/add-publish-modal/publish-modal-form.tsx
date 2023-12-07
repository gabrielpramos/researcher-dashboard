import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  NumberInput,
  NumberInputField,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
import { MultiValueOption, SingleValueOption } from '../../../../models/types';
import { researchTypes } from '../../../../constants/research-type';

interface FormData {
  title: string;
  publishType: string;
  mainAuthor: boolean;
  doi: string;
  coAuthors: string[];
  publishYear: string;
}

const PublushModalForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    doi: '',
    publishType: '',
    mainAuthor: true,
    coAuthors: [],
    publishYear: '',
  });
  const options: MultiValueOption = researchTypes.map((value) => ({
    label: value,
    value,
  }));

  return (
    <>
      <ModalBody>
        <FormControl isRequired>
          <FormHelperText marginBottom={4}>
            {texts.titleDescription}
          </FormHelperText>

          <Stack gap={5}>
            <Stack>
              <FormLabel htmlFor='publishTypes'>
                {texts.publishTypeLabel}
              </FormLabel>

              <CreatableSelect
                id='publishTypes'
                options={options}
                placeholder=''
                formatCreateLabel={(inputedValue) =>
                  `${texts.addNewAlias} ${inputedValue}`
                }
                onChange={(newValue: SingleValueOption) => {
                  setFormData({
                    ...formData,
                    publishType: newValue?.value ?? '',
                  });
                }}
                noOptionsMessage={() => texts.inputAndPressEnterOrTab}
              />
              <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
            </Stack>
            <Stack spacing={0}>
              <FormLabel>{texts.title}</FormLabel>

              <Input
                type='text'
                onChange={({ target: { value } }) => {
                  setFormData({ ...formData, title: value });
                }}
              />
            </Stack>

            <Stack spacing={0}>
              <FormLabel htmlFor='coAuthors'>{texts.coAuthorsLabel}</FormLabel>

              <CreatableSelect
                id='coAuthors'
                components={{ DropdownIndicator: null }}
                isMulti
                placeholder=''
                formatCreateLabel={(inputedValue) =>
                  `${texts.addNewAlias} ${inputedValue}`
                }
                onChange={(newValue: MultiValueOption) => {
                  setFormData({
                    ...formData,
                    coAuthors: newValue.map(({ value }) => value),
                  });
                }}
                noOptionsMessage={() => texts.inputAndPressEnterOrTab}
                openMenuOnFocus
              />
              <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
            </Stack>
            <Stack>
              <FormLabel htmlFor='placeOfPublish'>
                {texts.placeOfPublishLabel}
              </FormLabel>

              <CreatableSelect
                id='placeOfPublish'
                placeholder=''
                formatCreateLabel={(inputedValue) =>
                  `${texts.addNewAlias} ${inputedValue}`
                }
                onChange={(newValue: SingleValueOption) => {
                  setFormData({
                    ...formData,
                    publishType: newValue?.value ?? '',
                  });
                }}
                noOptionsMessage={() => texts.inputAndPressEnterOrTab}
              />
              <FormHelperText>{texts.inputAndPressEnterOrTab}</FormHelperText>
            </Stack>

            <Stack spacing={0}>
              <FormLabel requiredIndicator>{texts.doiUrlLabel}</FormLabel>

              <Input
                type='text'
                onChange={({ target: { value } }) => {
                  setFormData({ ...formData, doi: value });
                }}
              />
            </Stack>

            <Stack spacing={0}>
              <FormLabel requiredIndicator>{texts.publishYear}</FormLabel>

              <NumberInput
                onChange={(value) => {
                  setFormData({ ...formData, publishYear: value });
                }}
              >
                <NumberInputField />
              </NumberInput>
            </Stack>

            <Stack display='flex' flexFlow='row' alignItems='end' spacing={0}>
              <FormLabel htmlFor='mainAuthorFlag' mb='0'>
                {texts.mainAuthorFlag}
              </FormLabel>

              <Switch
                id='mainAuthorFlag'
                defaultChecked
                onChange={({ target: { checked } }) => {
                  setFormData({ ...formData, mainAuthor: checked });
                }}
              />
            </Stack>
          </Stack>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button type='submit' colorScheme='orange' isDisabled>
          {texts.submitAddPublush}
        </Button>
      </ModalFooter>
    </>
  );
};

export default PublushModalForm;
