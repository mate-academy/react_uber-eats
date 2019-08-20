import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainHomePage from './MainHomePage';

const BASE_URL = `https://mate-academy.github.io/react_uber-eats/api`;
const LONDON_URL = `/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`;

const getData = async() => {
  const response = await fetch(`${BASE_URL}${LONDON_URL}`);
  const result = await response.json();

  return result.data.feedItems.map(item => (
    result.data.storesMap[item.uuid]
  ));
};

class HomePage extends React.Component {
  state = {
    locationValue: 'London',
    filterValue: '',
    stores: [],
    storesToShow: [],
  };

  async componentDidMount() {
    const stores = await getData();

    this.setState({
      stores,
      storesToShow: stores,
    });
  }

  onHandlerChangeLocation = (event) => {
    this.setState({
      locationValue: event.target.value,
    });
  };

  onClearLocation = () => {
    this.setState({ locationValue: '' });
  };

  onHandlerFilter = (event) => {
    const { value } = event.target;

    this.setState(state => ({
      storesToShow: state.stores.filter(store => (
        store.title.toLowerCase().includes(value.toLowerCase())
      )),
      filterValue: value,
    }));
  };

  render() {
    const { locationValue, filterValue, storesToShow } = this.state;

    return (
      <>
        <Header
          locationValue={locationValue}
          onHandlerChangeLocation={this.onHandlerChangeLocation}
          onClearLocation={this.onClearLocation}
          filterValue={filterValue}
          onHandlerFilter={this.onHandlerFilter}
        />
        <MainHomePage stores={storesToShow} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
