import React from 'react';
import './styles/index.scss';
import { HashRouter, Switch } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Header } from './components/Header/index';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

const App = () => (
  <HashRouter>
    <Switch>
      <Provider store={store}>
        <Header />
        <MainPage />
        <Footer />
      </Provider>
    </Switch>
  </HashRouter>
);

export default App;
