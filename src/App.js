import React from 'react';
import './App.css';
import RestaurantsListPage from
  './components/restaurantsListPage/RestaurantsListPage';
import Header from './components/Header/Header';

const App = () => (

  <div className="App">
    <Header />
    <main className="content">
      <RestaurantsListPage />
    </main>
    <footer />
  </div>
);

export default App;
