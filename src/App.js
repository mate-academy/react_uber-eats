import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store/index';
import RestaurantsListPage from
  './components/RestaurantsListPage/RestaurantsListPage';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <main className="content">
        <RestaurantsListPage />
      </main>
    </div>
  </Provider>
);

export default App;
