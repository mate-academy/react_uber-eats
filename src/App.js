import React from 'react';
import './styles/index.scss';
import { Route, HashRouter } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { RestaurantsListPage }
  from './components/RestaurantsListPage';
import { Header } from './components/Header/index';
import Footer from './components/Footer/Footer';

const App = () => (
  <HashRouter>
    <Route
      path="/"
    >
      <Provider store={store}>
        <Header />
        <div className="page">
          <main className="content">
            <RestaurantsListPage />
          </main>
        </div>
        <Footer />
      </Provider>
    </Route>
  </HashRouter>
);

export default App;
