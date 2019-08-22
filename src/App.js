import React from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantsList from './components/RestaurantsList';

const App = () => (
  <div className="App">
    <header className="header">
      <Header />
    </header>

    <main className="main">
      <RestaurantsList />
    </main>

    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default App;
