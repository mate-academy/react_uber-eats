import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainPage from './components/MainPage';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
);
