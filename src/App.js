import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import Restorants from './Restorants';
import Main from './Main';

// const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';
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

    this.setState({
      stores,
    });
  }

  render() {
    const { stores } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            path="/food-delivery/"
            exact
            render={({ match }) => (
              <Main
                key={stores.id}
                stores={stores}
              />
            )}
          />
          <Route
            path="/food-delivery/restourant"
            exact
            render={({ match }) => (
              <Restorants
                key={stores.id}
                stores={stores}
              />
            )}
          />
          <Route
            path="*"
            component={NotFoundPage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
