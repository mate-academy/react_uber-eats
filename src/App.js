import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header/Header';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <main className="content">
        <RestaurantsListPage />
      </main>
      <footer>UBER Eats footer</footer>
    </div>
  </Provider>
);

export default App;
