import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import RestourantsListPage
  from './components/RestaurantsListPage';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestourantsListPage />
    </div>
  </Provider>
);

export default App;
