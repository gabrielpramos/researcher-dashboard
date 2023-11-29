import {
  Card,
  CardHeader,
  Heading,
  CardBody,
} from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import ResearchInfo, { ResearchInfoData } from './research-info/research-info';

const GeneralResearchList = () => {
  const ResearchInfoList: ResearchInfoData[] = [];

  return (
    <Card width='100%' height='100%' marginLeft='24px'>
      <CardHeader textAlign='center'>
        <Heading size='md'>{texts.generalResearchList}</Heading>
      </CardHeader>

      <CardBody overflow='auto'>
        {ResearchInfoList.map((data, index) => (
          <ResearchInfo key={`researchInfo-${index}`} data={data} />
        ))}
      </CardBody>
    </Card>
  );
};

export default GeneralResearchList;
