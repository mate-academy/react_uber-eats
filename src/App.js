import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/index.scss';
import { RestaurantsListPage } from './components/RestaurantsListPage';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <header>Uber Eats Header</header>
      <main className="content">
        <RestaurantsListPage />
      </main>
      <footer>Uber Eats Footer</footer>
    </div>
  </Provider>
);

export default App;
