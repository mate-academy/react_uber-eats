import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import './styles/index.scss';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
