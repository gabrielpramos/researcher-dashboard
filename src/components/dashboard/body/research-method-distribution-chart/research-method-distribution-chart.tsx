import { Card, CardHeader, Stack, Heading, CardBody } from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  PieLabelRenderProps,
  Cell,
} from 'recharts';

const ResearchMethodDistributionChart = () => {
  const data = [
    { name: 'Survey', value: 30 },
    { name: 'Revisão de Literatura', value: 29 },
    { name: 'Pesquisa-Ação', value: 11 },
    { name: 'Experimento', value: 16 },
    { name: 'Design Research', value: 117 },
    { name: 'Estudo de Caso', value: 45 },
  ];

  const renderCustomizedLabel = ({ percent, name }: PieLabelRenderProps) => {
    return `${name}: ${(percent! * 100).toFixed(0)}%`;
  };

  return (
    <Card w='100%' marginLeft={4}>
      <CardHeader>
        <Stack display='flex' flexFlow='row' alignItems='center'>
          <Heading size='md'>{texts.researchMethodDistribution}</Heading>
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

export default ResearchMethodDistributionChart;
