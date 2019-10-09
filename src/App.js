import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.scss';
// import * as Api from './Api';

class App extends React.Component {
  state = {
    locationSearchOpen: false,
    searchOpen: false,
    shoudStick: false,
    autoCompleteList: {},
    query: 'Kyiv',
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }

  checkScroll = () => {
    if (window.pageYOffset >= 1) {
      this.setState({ shoudStick: true });
    }

    if (window.pageYOffset < 1) {
      this.setState({ shoudStick: false });
    }
  };

  openLocSearch = () => {
    this.setState({ locationSearchOpen: true });
  };

  handleCityChange = async(input) => {
    this.setState(() => ({
      query: input,
    }));
  };

  closeSearch = () => {
    this.setState({
      locationSearchOpen: false,
      searchOpen: false,
    });
  };

  render() {
    const {
      shoudStick,
      query,
      searchOpen,
      locationSearchOpen,
      autoCompleteList,
    } = this.state;

    return (
      <div
        className="App"
        id="App"
        style={{ paddingTop: (shoudStick ? 75 : 0) }}
      >
        <Header
          shoudStick={shoudStick}
          searchOpen={searchOpen}
          closeSearch={this.closeSearch}
          openLocSearch={this.openLocSearch}
          locationSearchOpen={locationSearchOpen}
          query={query}
          handleCityChange={this.handleCityChange}
        />
        <Main
          location={query}
          autoCompleteList={autoCompleteList}
        />
        <Footer />
        <a
          style={{ display: (shoudStick ? 'flex' : 'none') }}
          className="back_btn"
          href="#App"
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/arrow-up.svg`}
            alt=""
          />
        </a>
      </div>
    );
  }
}
App.defaultProps = {
  shoudStick: false,
  locationSearchOpen: false,
  searchOpen: false,
};

export default App;
