import { Box, Flex, Image, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { FC } from 'react';

export type ResearchInfoData = {
  authorPhoto: string;
  author: string;
  title: string;
  coResearchers: string;
  authorMentions?: string;
  where: string[];
};

interface ResearchInfoProps {
  data: ResearchInfoData;
}

const ResearchInfo: FC<ResearchInfoProps> = ({
  data: { authorPhoto, author, title, authorMentions, coResearchers, where },
}) => {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Flex alignItems='center'>
            <Box height='82px' width='90px' alignSelf='center'>
              <Image
                borderRadius='50%'
                src={authorPhoto}
                alt='profile picture'
                height='82px'
                width='82px'
                loading='lazy'
              />
            </Box>
            <Text fontWeight='bold' marginBottom='8px'>
              {author}
            </Text>
          </Flex>
        </Td>
        <Td className='title-field wrappable-text' fontWeight='bold'>
          {title}
        </Td>
        <Td>
          <Text fontWeight='bold' className='wrappable-text co-authors-field'>
            {coResearchers}
          </Text>
        </Td>
        <Td>
          <Text
            fontWeight='bold'
            className='wrappable-text publish-place-field'
          >
            {where}
          </Text>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default ResearchInfo;
