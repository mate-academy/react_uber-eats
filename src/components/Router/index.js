import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainContent from '../MainContent';
import RestaurantPage from '../RestaurantPage';

const Router = () => (
  <Switch>
    <Route path="/" exact component={ToRestaurants} />
    <Route path="/restaurants" exact component={MainContent} />
    <Route path="/restaurants/:currentName" exact component={RestaurantPage} />
  </Switch>
);

const ToRestaurants = () => (
  <Redirect to="/restaurants" />
);

export default Router;
