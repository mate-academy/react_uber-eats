import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
    <Switch>
      <Route exact path="/" />
    </Switch>
  </div>
);

export default App;
