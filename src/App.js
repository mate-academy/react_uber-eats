import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import {
  Switch, Route, HashRouter,
} from 'react-router-dom';
import { store } from './store';

import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RestaurantPage } from './components/RestaurantPage';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Header />
      <main className="page">
        <Switch>
          <Route path="/" component={RestaurantsListPage} exact />
          <Route path="/:id?" component={RestaurantPage} exact />
        </Switch>
      </main>
    </HashRouter>
    <Footer />
  </Provider>
);

export default App;
