import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { RestaurantPage } from './components/RestaurantPage';

const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RestaurantsListPage} />
          <Route path="/:uuid" component={RestaurantPage} />
        </Switch>
      </BrowserRouter>
    </main>
    <Footer />
  </Provider>
);

export default App;
