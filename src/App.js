import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RestaurantsListPage } from
  './components/RestaurantsListPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Loader } from './components/Loader/Loader';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="page">
      <main className="content">
        <RestaurantsListPage />
        <Loader />
      </main>
    </div>
    <Footer />
  </Provider>
);

export default App;
