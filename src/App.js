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
    searchText: '',
    visible: [],
  };

  async componentDidMount() {
    const stores = await getStores();

    setTimeout(() => {
      this.setState({
        stores: [...stores],
        visible: [...stores],
        isLoading: false,
      });
    }, 1000);
  }

  searchQuery = (event) => {
    this.setState({
      searchText: event.target.value.toLowerCase().trim(),
    });
    this.filtered();
  }

  filtered = () => {
    this.setState(state => ({
      visible: [
        ...state.stores.filter(
          store => store.title.toLowerCase().trim().includes(state.searchText)
        ),
      ],
    }));
  }

  clearText = (event) => {
    event.preventDefault();
    this.setState({
      searchText: '',
    });
  }

  render() {
    const { visible, isLoading } = this.state;

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

        <div className={isLoading ? 'none' : 'main-wrapper'}>
          <Header
            stores={visible}
            searchQuery={this.searchQuery}
            clearText={this.clearText}
            searchText={this.state.searchText}
          />
          <Main stores={visible} />
        </div>
        <div className={isLoading ? 'none' : ''}>
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
