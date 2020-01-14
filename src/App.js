import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/index.scss';
import { RestaurantsListPage } from './components/RestaurantsListPage';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <main className="main-content">
        <RestaurantsListPage />
      </main>
    </div>
  </Provider>
);

export default App;
