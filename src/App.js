import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Store/index';
import RestaurantsListPage from './Components/RestaurantsListPage/RestaurantsListPage';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
