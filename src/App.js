import React from "react";
import "./App.css";
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';

const App = () => (
  <HashRouter>

    <Switch>
      <Route path="/" exact component={HomePage} />

    </Switch>

  </HashRouter>
);

export default App;
