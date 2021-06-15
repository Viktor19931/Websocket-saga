import { useSelector } from 'react-redux';
import { FC } from 'react';

import { selectors } from '../../store';

const Main: FC = () => {
  const list = useSelector(selectors.selectList);

  console.log('List ', list);

  return (
    <div>
      <h2>Here is list from websocket</h2>
      {list.map((item: any) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default Main;
