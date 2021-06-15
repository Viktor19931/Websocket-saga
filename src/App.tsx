import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import GlobalStyles from './styles/GlobalStyles';

const App: FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
