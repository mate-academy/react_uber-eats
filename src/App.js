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
    <main className="page">
      <div className="content">
        <RestaurantsListPage />
      </div>
    </main>
    <Footer />
  </Provider>
);

export default App;
