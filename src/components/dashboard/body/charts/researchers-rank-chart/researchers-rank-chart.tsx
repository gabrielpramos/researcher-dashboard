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
import './researchers-rank-chart.scss';
import CustomizedYAxisTick from '../../../../recharts/customized-yaxis-tick';
import { useDataContext } from '../../../data-wrapper/data-wrapper';

const CHART_DATA_KEY = 'Publicações';

const ResearchersRankChart = () => {
  const { usersData } = useDataContext();
  const data = usersData
    .filter(({ papers }) => papers.length > 0)
    .map(({ name, papers }) => ({
      name,
      [CHART_DATA_KEY]: papers.length,
      amt: papers.length,
    }))
    .sort(
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
