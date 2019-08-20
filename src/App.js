import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import RestaurantsList from './components/RestaurantsList';
import Footer from './components/Footer';

const URL = 'https://mate-academy.github.io/react_uber-eats/api';

const App = () => {
  const [stores, setStores] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async() => {
    await fetch(`${URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`)
      .then(response => response.json())
      .then(({ data }) => {
        setStores(data.feedItems.map(({ uuid }) => (
          data.storesMap[uuid]
        )));
      })
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <div className="App">
      <Header />

      {isLoaded
        ? (
          <RestaurantsList
            stores={stores}
          />
        ) : (
          <div>Loading...</div>
        )
      }

      <Footer />
    </div>
  );
};

export default App;
