import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index';
import 'antd/dist/antd.css';
import RestaurantsListPage
  from './components/RestaurantsListPage/RestaurantsListPage';
import './index.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className={styles.pageContainer}>
        <Header />
        <main className={styles.container}>
          <RestaurantsListPage />
        </main>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);

export default memo(App);
