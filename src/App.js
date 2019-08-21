import React from "react";
import "./App.css";
import { Route, HashRouter, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from "./components/Footer";

const App = () => (
  <HashRouter>
    <div className="App">
      <Header />
    </div>

    <Switch>
      <Route path="/" exact component={HomePage} />

    </Switch>

    <Footer />
  </HashRouter>
);

export default App;
