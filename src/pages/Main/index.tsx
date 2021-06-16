import { useSelector } from 'react-redux';
import { FC } from 'react';

import { selectors } from '../../store';
import { useDrawChart } from './hooks';
import { ChartWrapper } from './Wrapper';

const Main: FC = () => {
  const [chartContainerRef] = useDrawChart();
  const list = useSelector(selectors.selectList);
  console.log('List ', list);

  return (
    <div>
      <h2>Here is list from websocket</h2>
      {list.map((item: any, index: number) => (
        <p key={index}>{item}</p>
      ))}
      <ChartWrapper ref={chartContainerRef} />
    </div>
  );
};

export default Main;
