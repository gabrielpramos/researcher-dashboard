import { Card, CardHeader, Stack, Heading, CardBody } from '@chakra-ui/react';
import { texts } from '../../../../../constants/texts';
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CHART_DATA_KEY = 'Publicações';

const TitlesRankChart = () => {
  const data = [
    {
      name: 'Desenvolvimento de Software',
      [CHART_DATA_KEY]: 12,
      amt: 12,
    },
    {
      name: 'Uma Revisão Sistemática',
      [CHART_DATA_KEY]: 7,
      amt: 7,
    },
    {
      name: 'Um Mapeamento Sistemático',
      [CHART_DATA_KEY]: 8,
      amt: 8,
    },
    {
      name: 'Processo de Desenvolvimento',
      [CHART_DATA_KEY]: 4,
      amt: 4,
    },
    {
      name: 'Engenharia de Software',
      [CHART_DATA_KEY]: 3,
      amt: 3,
    },
  ].sort(
    ({ [CHART_DATA_KEY]: amountA }, { [CHART_DATA_KEY]: amountB }) =>
      amountB - amountA
  );

  return (
    <Card w='100%' marginLeft={4}>
      <CardHeader>
        <Stack display='flex' flexFlow='row' alignItems='center'>
          <Heading size='md'>{texts.titlesMostRepeated}</Heading>
        </Stack>
      </CardHeader>

      <CardBody display='flex' justifyContent={'center'}>
        <ResponsiveContainer>
          <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            layout='vertical'
          >
            <XAxis type='number' />
            <YAxis dataKey='name' type='category' fontSize={10} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={CHART_DATA_KEY}
              fill='#9F7AEA'
              activeBar={<Rectangle fill='#553C9A' />}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default TitlesRankChart;
