import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/index.scss';

import { RestaurantListPage } from './components/RestaurantListPage';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantListPage />
    </div>
  </Provider>
);

export default App;
