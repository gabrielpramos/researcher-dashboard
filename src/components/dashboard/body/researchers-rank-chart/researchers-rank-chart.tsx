import { Card, CardHeader, Stack, Heading, CardBody } from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
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
import './researchers-rank-chart.scss';
import CustomizedYAxisTick from '../../../recharts/customized-yaxis-tick';

const CHART_DATA_KEY = 'Publicações';

const ResearchersRankChart = () => {
  const data = [
    {
      name: 'Ronnie Santos',
      [CHART_DATA_KEY]: 14,
      amt: 14,
    },
    {
      name: 'Felipe Fernandes',
      [CHART_DATA_KEY]: 13,
      amt: 13,
    },
    {
      name: 'Gabriel Ramos',
      [CHART_DATA_KEY]: 5,
      amt: 5,
    },
    {
      name: 'César França',
      [CHART_DATA_KEY]: 13,
      amt: 13,
    },
    {
      name: 'Lucas Job',
      [CHART_DATA_KEY]: 10,
      amt: 10,
    },
  ].sort(
    ({ [CHART_DATA_KEY]: amountA }, { [CHART_DATA_KEY]: amountB }) =>
      amountB - amountA
  );

  return (
    <Card height='400px' width='100%'>
      <CardHeader>
        <Stack display='flex' flexFlow='row' alignItems='center'>
          <Heading size='md'>{texts.topPublishersYear}</Heading>
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
            <YAxis dataKey='name' type='category' tick={CustomizedYAxisTick} />
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

export default ResearchersRankChart;
