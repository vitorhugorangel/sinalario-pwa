import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Player } from '../pages/Player';

export const GlobalRoute: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/player/:id" exact component={Player} />
  </Switch>
);
