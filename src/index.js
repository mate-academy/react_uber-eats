import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.scss';
import store from './store';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <MainPage />
    <Footer />
  </Provider>,
  document.getElementById('root')
);
