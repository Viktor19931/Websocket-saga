import { FC } from 'react';

import { useDrawChart } from './hooks';
import Wrapper from './Wrapper';

const Main: FC = () => {
  const [chartContainerRef] = useDrawChart();

  return <Wrapper ref={chartContainerRef} />;
};

export default Main;
