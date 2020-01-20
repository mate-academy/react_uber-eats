import React from 'react';
import { Provider } from 'react-redux';
import RestaurantListPage
  from './components/RestaurantListPage/RestaurantListPage';
import { store } from './store';
import './styles/index.scss';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantListPage />
      </div>
      <Footer />
    </main>
  </Provider>
);

export default App;
