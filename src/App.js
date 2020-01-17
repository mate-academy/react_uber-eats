import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store/index';
import RestaurantsListPage from
  './components/RestaurantsListPage/RestaurantsListPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="page">
      <main className="content">
        <RestaurantsListPage />
      </main>
    </div>
    <Footer />
  </Provider>
);

export default App;
