import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './style/App.scss';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';
const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

const loadData = async() => {
  const response = await fetch(
    `${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`
  );
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};

class App extends React.Component {
  state = {
    stores: [],
  }

  async componentDidMount() {
    const stores = await loadData();

    this.setState({ stores });
  }

  checkRaitingInfo = (store) => {
    if (store.feedback) {
      if (store.feedback.rating) {
        return store.feedback.rating;
      }

      return false;
    }

    return false;
  }

  checkRaitingCountInfo = (store) => {
    if (store.feedback) {
      if (store.feedback.ratingCount) {
        return store.feedback.ratingCount;
      }

      return false;
    }

    return false;
  }

  render() {
    const { stores } = this.state;

    return (
      <div className="App">
        <Header IMG_URL={IMG_URL} />
        <Main
          stores={stores}
          checkRaitingInfo={this.checkRaitingInfo}
          checkRaitingCountInfo={this.checkRaitingCountInfo}
          IMG_URL={IMG_URL}
        />
        <Footer IMG_URL={IMG_URL} />
      </div>
    );
  }
}

export default App;
