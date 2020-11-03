import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/index';
import 'antd/dist/antd.css';
import './index.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import AppRouter from './routes/AppRouter';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className={styles.pageContainer}>
        <Header />
        <main className={styles.container}>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default memo(App);
