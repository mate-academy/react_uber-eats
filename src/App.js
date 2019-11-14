import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Store/index';
import RestaurantsListPage from './Components/RestaurantsListPage/RestaurantsListPage';
import './Style/index.scss';
import { Header } from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <main className="container">
        <RestaurantsListPage />
      </main>
      <Footer />
    </div>
  </Provider>
);

export default App;
