import React from 'react';

import Header from './components/Header/Header';
import RestaurantsListPage from './components/RestaurantsListPage/index';

const App = () => (
  <div className="page">
    <Header />
    <main className="content">
      <RestaurantsListPage />
    </main>
    <footer>FOOTER</footer>
  </div>
);

export default App;
