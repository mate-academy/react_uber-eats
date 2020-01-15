import React from 'react';
import './App.css';
import RestaurantsListPage from
  './components/restaurantsListPage/RestaurantsListPage';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <div className="page">
      <main className="content">
        <RestaurantsListPage />
      </main>
    </div>
    <Footer />
  </>
);

export default App;
