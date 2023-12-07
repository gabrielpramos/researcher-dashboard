import { ReactElement, SVGProps } from 'react';

const MAX_LENGTH_TO_DISPLAY = 15;
const TRUNCATED_LIMIT_VALUE = 12;
const TRUNCATE_STARTING_VALUE = 0;

const CustomizedYAxisTick = (
  props: SVGProps<SVGTextElement> &
    ReactElement<SVGElement> & { payload: { value: string } }
) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={2} textAnchor='end' fill='#000' fontSize={12}>
        {payload.value.length > MAX_LENGTH_TO_DISPLAY
          ? `${payload.value.substring(
              TRUNCATE_STARTING_VALUE,
              TRUNCATED_LIMIT_VALUE
            )}...`
          : payload.value}
      </text>
    </g>
  );
};

export default CustomizedYAxisTick;
