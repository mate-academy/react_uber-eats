import React from 'react';
import { Provider } from 'react-redux';
import store from './components/index';
import { Enchanced as RestaurantsListPage }
  from './components/RestaurantsListPage/index';
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => (

  <Provider store={store}>
    <Header />
    <div className="page">
      <RestaurantsListPage />
    </div>
    <Footer />
  </Provider>
);

export default App;
