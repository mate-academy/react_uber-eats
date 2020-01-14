import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantsListPage from './components/RestaurantsListPage';
import './styles/Page.scss';

const App = () => (
  <>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantsListPage />
      </div>
    </main>
    <Footer />
  </>
);

export default App;
