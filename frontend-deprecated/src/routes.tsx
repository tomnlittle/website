import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './Landing';

export const Routes = () => (
  <Switch>
    <Route component={Landing} />
  </Switch>
);
