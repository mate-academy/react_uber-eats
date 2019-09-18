import React, { useState, useEffect } from 'react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import debounce from 'lodash.debounce';
import './style/App.scss';
import Header from './components/Header';
import RestaurantsList from './components/RestaurantsList';
import Footer from './components/Footer';

const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api/';

const App = () => {
  const [stores, setStores] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterValue, setFilterValue] = useState('');

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

  const hadleInputChange = debounce((value) => {
    setFilterValue(value);
  }, 800);

  const filterStores = () => {
    if (filterValue === '') {
      return stores;
    }

    return stores.filter(
      store => (
        (store.title + store.categories)
          .toLowerCase()
          .includes(filterValue.trim())
      ),
    );
  };

  const filteredStores = filterStores();

  return (
    <div className="App">
      <Header
        onChange={e => (hadleInputChange(e.target.value))}
      />
      {isLoaded
        ? (
          <RestaurantsList
            stores={filteredStores}
          />
        )
        : ''
      }
      <Footer />
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#59BD5A',
          outline: 'none',
          fill: 'rgb(255,255,255)',
        }}
      />
    </div>
  );
};

export default App;
