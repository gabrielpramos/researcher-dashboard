import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';

const UserResearchList = () => {
  return (
    <Card width={422} height='100%'>
      <CardHeader textAlign='center'>
        <Heading size='md'>{texts.yourResearchList}</Heading>
      </CardHeader>

      <CardBody>
        <Text textAlign='center'>You don't have any research so far.</Text>
      </CardBody>
    </Card>
  );
};

export default UserResearchList;
