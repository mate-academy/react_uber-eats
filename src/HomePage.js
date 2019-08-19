import React from 'react';
import Header from './Header';
import Footer from './Footer';

class HomePage extends React.Component {
  state = {
    locationValue: 'London',
    filterValue: '',
  };

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
    const {locationValue, filterValue } = this.state;

    return (
      <>
        <Header
          locationValue={locationValue}
          onHandlerChangeLocation={this.onHandlerChangeLocation}
          onClearLocation={this.onClearLocation}
          filterValue={filterValue}
          onHandlerFilter={this.onHandlerFilter}
        />
        <Footer />
      </>
    );
  }
}

export default HomePage;
