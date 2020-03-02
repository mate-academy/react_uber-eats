import React from 'react';
import './App.scss';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home/home';
import RestaurantPage from './components/restaurantPage/restaurantPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/restaurant/:uuid">
      <RestaurantPage />
    </Route>
  </Switch>
);

export default App;
