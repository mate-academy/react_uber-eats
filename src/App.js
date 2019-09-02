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

    setTimeout(() => {
      this.setState({
        stores,
        isLoading: false,
      });
    }, 4000);
  }

  render() {
    const { stores, isLoading } = this.state;

    return (
      <div className="App">
        <div className={isLoading ? 'load-bg' : 'none'}>
          <div className={isLoading ? 'load' : 'none'}>
            <div>G</div>
            <div>N</div>
            <div>I</div>
            <div>D</div>
            <div>A</div>
            <div>O</div>
            <div>L</div>
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
