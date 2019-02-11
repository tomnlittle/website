import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from './pages/404';
import { Landing } from './pages/Landing';

export const Routes = () => (
  <Switch>
    <Route exact={true} path='/' component={Landing} />
    <Route component={NotFound} />
  </Switch>
);
