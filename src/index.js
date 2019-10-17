import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './components/App';
import './styles/index.scss';

ReactDOM.render(
  <BrowserRouter basename='https://kseniiamazan.github.io/react_uber-eats/'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
