import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { RestaurantsListPage }
  from './components/RestourantsListPage/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <Header />

    <main className="page">
      <div className="content">
        <RestaurantsListPage />
      </div>
    </main>

    <Footer />
  </Provider>
);

export default App;
