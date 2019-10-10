import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { RestaurantListPage } from './components/RestaurantListPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantListPage />
      </div>
    </main>
    <Footer />
  </Provider>
);

export default App;
