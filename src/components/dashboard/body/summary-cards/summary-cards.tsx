import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import { dashboardCards } from '../../../../constants/dashboard-cards';
import { View, useViewContext } from '../../dashboard';
import { FiExternalLink } from 'react-icons/fi';

const SummaryCards = () => {
  const { updateView } = useViewContext();

  return (
    <Flex height='160px' gap={8} width='100%' justifyContent='center'>
      {dashboardCards.map(({ title, total, label }, index) => (
        <Card key={index} width='320px'>
          <CardHeader>
            <Flex width='100%' justifyContent='space-between'>
              <Heading size='md'>{title}</Heading>

              <Tooltip label={label}>
                <Box
                  cursor='pointer'
                  onClick={() => {
                    updateView(View.DetailedList);
                  }}
                >
                  <Icon
                    alignSelf='center'
                    justifySelf='end'
                    fontSize='22px'
                    as={FiExternalLink}
                  />
                </Box>
              </Tooltip>
            </Flex>
          </CardHeader>

          <CardBody paddingY={0}>
            <Text fontSize='48px' fontWeight='700'>
              {total}
            </Text>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};
export default SummaryCards;
