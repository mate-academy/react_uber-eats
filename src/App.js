import React from 'react';
import './App.css';

import Header from './components/Header';
import RestaurantsList from './components/RestaurantsList';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />

    <RestaurantsList />

    <Footer />
  </div>
);

export default App;
