import React from 'react';

import Header from './components/Header/Header';
import RestaurantsListPage from './components/RestaurantsListPage/index';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="page">
    <Header />
    <main className="content">
      <RestaurantsListPage />
    </main>
    <Footer />
  </div>
);

export default App;
