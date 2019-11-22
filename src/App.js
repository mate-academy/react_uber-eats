import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.scss';
import { RestourantsListpage } from './components/RestourantsListPage/RestourantsListPage';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Loader } from './components/Loader/Loader';

const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestourantsListpage />
      </div>
    </main>
    <Footer />
  </Provider>
);

export default App;
