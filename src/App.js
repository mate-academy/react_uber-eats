import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header>Uber Eats</Header>
      <main className="page">
        <div className="content">
          <RestaurantsListPage />
        </div>
      </main>
      <Footer />
    </div>
  </Provider>
);
