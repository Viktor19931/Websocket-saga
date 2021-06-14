import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Payment from './pages/Payment';
import GlobalStyles from './styles/GlobalStyles';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/'>
            <Payment />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
