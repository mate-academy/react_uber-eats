import React from 'react';

import Header from './components/Header/Header';
import RestaurantsListPage from './components/RestaurantsListPage/index';
import Footer from './components/Footer/Footer';

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
