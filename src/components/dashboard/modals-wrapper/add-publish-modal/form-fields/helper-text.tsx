import { FormHelperText, Icon, Text, Link } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { texts } from '../../../../../constants/texts';
import { useDataContext } from '../../../data-wrapper/data-wrapper';
import { Link as RouterLink } from 'react-router-dom';

const HelperText = () => {
  const { userData } = useDataContext();

  return (
    <FormHelperText marginBottom={4}>
      {texts.titleDescription}
      <Link as={RouterLink} to={userData.lattes} isExternal>
        <Text fontWeight='bold'>
          {texts.clickHereToCheck} <Icon as={FiExternalLink} mx='2px' />
        </Text>
      </Link>
    </FormHelperText>
  );
};

export default HelperText;
