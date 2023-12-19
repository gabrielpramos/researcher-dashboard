import { Card, CardHeader, Stack, Heading, CardBody } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  PieLabelRenderProps,
  Cell,
} from 'recharts';
import { useDataContext } from '../../../data-wrapper/data-wrapper';

const PublishTypePiechart = () => {
  const { typesData } = useDataContext();
  const data = typesData
    .filter(({ papers }) => papers.length > 0)
    .map(({ type, papers }) => ({
      name: type,
      value: papers.length,
    }));

  const renderCustomizedLabel = ({ percent, name }: PieLabelRenderProps) => {
    return `${name}: ${(percent! * 100).toFixed(0)}%`;
  };

  return (
    <Card w='100%' marginLeft={4}>
      <CardHeader>
        <Stack display='flex' flexFlow='row' alignItems='center'>
          <Heading size='md'>{texts.researchTypeDistribution}</Heading>
        </Stack>
      </CardHeader>

      <CardBody display='flex' justifyContent={'center'}>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={400} height={400}>
            <Pie
              dataKey='value'
              isAnimationActive={true}
              fontSize={12}
              data={data}
              cx='50%'
              cy='50%'
              outerRadius={80}
              fill='#9F7AEA'
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}-${index}`} fill='#9F7AEA' />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default PublishTypePiechart;
