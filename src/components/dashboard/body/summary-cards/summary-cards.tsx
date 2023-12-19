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

import { View, useViewContext } from '../../dashboard';
import { FiExternalLink } from 'react-icons/fi';
import { useDataContext } from '../../data-wrapper/data-wrapper';
import { summaryCardsMapping } from './summary-cards-mapping';
import 'core-js/actual/array/group-by';

const SummaryCards = () => {
  const { updateView } = useViewContext();
  const { publishesData } = useDataContext();
  const dashboardCardsMap = summaryCardsMapping({ publishesData });

  return (
    <Flex height='160px' gap={8} width='100%' justifyContent='center'>
      {dashboardCardsMap.map(({ title, total, label }, index) => (
        <Card key={index} width='320px'>
          <CardHeader height='88px'>
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
