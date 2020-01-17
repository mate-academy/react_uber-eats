import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.scss';
import store from './store';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <MainContent />
    <Footer />
  </Provider>,
  document.getElementById('root')
);
