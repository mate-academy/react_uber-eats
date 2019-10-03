import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.scss';

class App extends React.Component {
  state = {
    shoudStick: false,
    specialProposition: [],
    newOnSite: [],
    popularNear: [],
    foodList: [],
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

  render() {
    const { shoudStick } = this.state;

    return (
      <div
        className="App"
        id="App"
        style={{ paddingTop: (shoudStick ? 75 : 0) }}
      >
        <Header
          shoudStick={shoudStick}
        />
        <Main />
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
};

export default App;
