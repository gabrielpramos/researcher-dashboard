import { Box, Card, Flex, Image, Text } from '@chakra-ui/react';
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
    <Card flexFlow='row' display='flex' padding={8} marginBottom={8}>
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

      <Flex flexFlow='column' marginLeft={4} width='100%'>
        <Text fontWeight='bold' marginBottom='8px'>
          Author: {author}
        </Text>
        <p>
          <strong>Title:</strong> {title}
        </p>
        {authorMentions && (
          <p>
            <strong>Mentions:</strong> {authorMentions}
          </p>
        )}
        <p>
          <strong>Co Researchers:</strong> {coResearchers}
        </p>
        <p>
          <strong>Where:</strong> {where}
        </p>
      </Flex>
    </Card>
  );
};

export default ResearchInfo;
