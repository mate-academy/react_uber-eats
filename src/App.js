import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import './styles/index.scss';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <header>Future header</header>
      <main className="content">
        <RestaurantsListPage />
      </main>
      <footer>Future footer</footer>
    </div>
  </Provider>
);

export default App;
