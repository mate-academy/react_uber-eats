import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

const getStores = async() => {
  const response = await fetch(`${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`);
  const result = await response.json();

  return result.data.feedItems.map(item => {
    return result.data.storesMap[item.uuid];
  });
};

class App extends React.Component {
  state = {
    stores: [],
  };

  async componentDidMount() {
    const stores = await getStores();

    this.setState({
      stores,
    });
  }

  render() {
    const { stores } = this.state;

    return (
      <div className="App">
        <div className="grid-wrapper">
          <Header />
          <Main stores={stores} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
