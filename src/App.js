import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/index.scss';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="page">
      <main className="content">
        <RestaurantsListPage />
      </main>
    </div>
    <Footer />
  </Provider>
);

export default App;
