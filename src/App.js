import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantsList from './components/RestaurantsList';

import RestaurantPage from './components/RestaurantPage';

const App = () => (
  <Switch>
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <main className="main">
        <Route path="/" exact component={RestaurantsList} />
        <Route path="/restaurant" exact component={RestaurantPage} />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>

  </Switch>
);

export default App;
