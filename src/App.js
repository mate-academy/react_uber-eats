import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
