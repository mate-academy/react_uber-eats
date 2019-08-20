import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainHomePage from './MainHomePage';

const BASE_URL = `https://mate-academy.github.io/react_uber-eats/api`;

const getData = async () => {
  const response = await fetch(`${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`);
  const result = await response.json();

  return result.data.feedItems.map(item => {
    return result.data.storesMap[item.uuid];
  });
};

class HomePage extends React.Component {
  state = {
    locationValue: 'London',
    filterValue: '',
    stores: [],
  };

  async componentDidMount() {
    const stores = await getData();

    this.setState({stores});
  }

  onHandlerChangeLocation = (event) => {
    this.setState({
      locationValue: event.target.value,
    });
  };

  onClearLocation = () => {
    this.setState({
      locationValue: '',
    });
  };

  onHandlerFilter = (event) => {

  };

  render() {
    const { locationValue, filterValue, stores } = this.state;

    console.log(stores);
    return (
      <>
        <Header
          locationValue={locationValue}
          onHandlerChangeLocation={this.onHandlerChangeLocation}
          onClearLocation={this.onClearLocation}
          filterValue={filterValue}
          onHandlerFilter={this.onHandlerFilter}
        />
        <MainHomePage stores={stores} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
