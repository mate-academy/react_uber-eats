import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <h1>
        React Uber eats
      </h1>
    </div>
  </Provider>
);

export default App;
