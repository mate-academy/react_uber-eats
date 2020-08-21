import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainContent from '../MainContent';
import RestaurantPage from '../RestaurantPage';
import NoSuchPage from '../NoSuchPage';

const theme = {
  primaryGreen: '#247a00',
  backgroundGrey: '#f5f5f5',
};

const Router = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" exact component={ToRestaurants} />
      <Route path="/restaurants" exact component={MainContent} />
      <Route
        path="/restaurants/:currentUuid"
        exact
        component={RestaurantPage}
      />
      <Route component={NoSuchPage} />
    </Switch>
  </ThemeProvider>
);

const ToRestaurants = () => (
  <Redirect to="/restaurants" />
);

export default Router;
