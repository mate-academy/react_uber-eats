import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
// import Header from "./components/Header/Header";

const App = () => (
  <Provider store={store}>
    <div className="page">
      {/* <Header /> */}
      <header />
      <main className="content">
        <RestaurantsListPage />
      </main>
      <footer>Uber Eats</footer>
    </div>
  </Provider>
);

export default App;
