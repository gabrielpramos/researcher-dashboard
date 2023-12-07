import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { texts } from '../../../../constants/texts';
import { BsBarChartFill } from 'react-icons/bs';

const CHART_DATA_KEY = 'Publicações';

const ArticleYearlyBarchart = () => {
  const data = [
    {
      name: '2017',
      [CHART_DATA_KEY]: 4,
      amt: 4,
    },
    {
      name: '2018',
      [CHART_DATA_KEY]: 10,
      amt: 10,
    },
    {
      name: '2019',
      [CHART_DATA_KEY]: 8,
      amt: 8,
    },
    {
      name: '2020',
      [CHART_DATA_KEY]: 3,
      amt: 3,
    },
    {
      name: '2021',
      [CHART_DATA_KEY]: 6,
      amt: 6,
    },
    {
      name: '2022',
      [CHART_DATA_KEY]: 17,
      amt: 17,
    },
    {
      name: '2023',
      [CHART_DATA_KEY]: 30,
      amt: 30,
    },
  ];

  return (
    <Card height='400px' width='100%'>
      <CardHeader>
        <Stack display='flex' flexFlow='row' alignItems='center'>
          <Icon as={BsBarChartFill} />
          <Heading size='md'>{texts.articleYearlyChart}</Heading>
        </Stack>
      </CardHeader>

      <CardBody>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={CHART_DATA_KEY}
              fill='#f8741b'
              activeBar={<Rectangle fill='#ff6002' />}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default ArticleYearlyBarchart;
