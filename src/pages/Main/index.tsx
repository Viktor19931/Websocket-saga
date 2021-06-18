import { FC } from 'react';

import { useDrawChart } from './hooks';
import { ChartWrapper } from './Wrapper';

const Main: FC = () => {
  const [chartContainerRef] = useDrawChart();

  return (
    <div>
      <h2>Here is list from websocket</h2>
      <ChartWrapper ref={chartContainerRef} />
    </div>
  );
};

export default Main;
