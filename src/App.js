import React, { useState, useEffect } from 'react';
import './style/App.scss';
import Header from './components/Header';
import RestaurantsList from './components/RestaurantsList';
import Footer from './components/Footer';

const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api/';

const App = () => {
  const [stores, setStores] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getStores = async() => {
      const response = await fetch(`
      ${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`);
      const result = await response.json();

      setStores(result.data.feedItems.map(item => (
        (result.data.storesMap[item.uuid])
      )));
      setIsLoaded(true);
    };

    getStores();
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoaded
        ? (
          <RestaurantsList
            stores={stores}
          />
        )
        : ''
      }
      <Footer />
    </div>
  );
};

export default App;
