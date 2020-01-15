import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/index';
import RestaurantsListPage from './components/RestaurantsListPage';
import Header from './components/Header/Header';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <main className="content">
        <RestaurantsListPage />

      </main>

      <footer>Uber Eats Footer</footer>
    </div>
  </Provider>
);

export default App;
