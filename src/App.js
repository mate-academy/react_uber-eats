import React, { useState } from 'react';
import './App.scss';
import RestaurantsList from './components/restaurantsList/restaurantsList';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
  const [address, setAddress] = useState(false);

  return (
    <div className="app">
      <header className="header app__header">
        <Header
          address={address}
          setAddress={setAddress}
        />
      </header>
      <main className={`restaurants_list ${address
        ? 'app__restaurants_list--mobile'
        : 'app__restaurants_list'}`}
      >
        <RestaurantsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
