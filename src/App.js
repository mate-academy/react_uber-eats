import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.scss';
// eslint-disable-next-line import/named
import { Enhanced as RestaurantsListPage }
  from './components/RestaurantsListPage/index';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
