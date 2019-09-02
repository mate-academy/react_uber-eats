import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

const getStores = async() => {
  const response = await fetch(`${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`);
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};

class App extends React.Component {
  state = {
    stores: [],
    isLoading: true,
  };

  async componentDidMount() {
    const stores = await getStores();

    this.setState({
      stores,
      isLoading: false,
    });
  }

  render() {
    const { stores, isLoading } = this.state;

    return (
      <div className="App">
        <div className={isLoading ? 'd-flex justify-content-center' : 'none'}>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className={isLoading ? 'none' : 'grid-wrapper'}>
          <Header />
          <Main stores={stores} />
          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
