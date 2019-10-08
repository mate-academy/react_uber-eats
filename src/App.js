import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RestaurantsListPage } from './Components/RestaurantsListPage';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
// import { RestaurantPage } from './Components/RestaurantPage';

export const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantsListPage />
        {/* <RestaurantPage /> */}
      </div>
    </main>
    <Footer />
  </Provider>
);
