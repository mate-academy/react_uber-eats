import React from "react";
import "./App.css";
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import RestaurantPage from './components/RestaurantPage';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/restaurant/:uuid" exact component={RestaurantPage} />
    </Switch>
  </HashRouter>
);

export default App;
