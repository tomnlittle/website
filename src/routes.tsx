import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { NotFound } from './pages/404';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Landing} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
