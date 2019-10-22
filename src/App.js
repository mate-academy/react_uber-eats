import React from 'react';
import './App.css';
import RestourantsListPage from './components/RestourantsListPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <div className="page">
      <div className="content">
        <RestourantsListPage />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
