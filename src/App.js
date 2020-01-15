import React from 'react';
import './App.scss';
import RestaurantsList from './components/restaurantsList/restaurantsList';
import Header from './components/header/header';

const App = () => (

  <div className="app">
    <header className="header app__header">
      <Header />
    </header>
    <main className="restaurants_list app__restaurants_list">
      <RestaurantsList />
    </main>
    <footer>
        footer
    </footer>
  </div>
);

export default App;
