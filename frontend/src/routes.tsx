import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from './404';
import { Landing } from './Landing';

export const Routes = () => (
  <Switch>
    <Route exact={true} path='/timeline' component={Landing} />
    <Route exact={true} path='/' component={Landing} />
    <Route component={NotFound} />
  </Switch>
);
