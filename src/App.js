import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RestaurantListPage }
  from './components/RestaurantListPage/index';
import { Header } from './components/Header';
import { Footer } from './components/footer';

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
