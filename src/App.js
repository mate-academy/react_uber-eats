import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { Enchanced as RestaurantsListPage }
  from './store/RestaurantsListPage/index';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
