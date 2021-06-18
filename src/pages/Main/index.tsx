import { FC } from 'react';

import { ChartWrapper } from './Wrapper';

import Chart from '../../components/Chart';

const Main: FC = () => (
  <div>
    <h1>Here is chart from websocket</h1>
    <ChartWrapper>
      <Chart />
    </ChartWrapper>
  </div>
);

export default Main;
