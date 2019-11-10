import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RestourantsListPage
  from './components/RestaurantsListPage';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="page">
      <main className="content">
        <RestourantsListPage />
      </main>
    </div>

    <Footer />
  </Provider>
);

export default App;
