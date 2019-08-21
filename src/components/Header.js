import React from 'react';

class Header extends React.Component {
  state={
    isLocation: false,
    isSearch: false,
  }

  handleLocation = () => {
    this.setState({isLocation: !this.state.isLocation})
  }

  handleLocation = () => {
    this.setState({handleSearch: !this.state.handleSearch})
  }

  render() {
    return (
      <header>
        <div class="header__top">
          <form>
          <a href="#" >
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
              class="header__logo"
            />
          </a>
            <button onClick={this.handleLocation}>
              <div className="header__button">
                <img src="images/icons/location.svg" alt='map-marker'></img>
                <span>London</span>
              </div>
            </button>
            <div className="header__dropdown">
            <button>
              <div className="header__button mainmenubtn">
                <img src="images/icons/time.svg" alt='map-marker'></img>
                <span>Deliver now</span>
              </div>
            </button>
            <div class="header__dropdown-child">
              <a href="/">
                <div className="header__button childbtn">
                <img src="images/icons/time.svg" alt='map-marker'></img>
                Deliver now
                </div>
              </a>
              <a href="/">
                <div className="header__button childbtn">
                <img src="images/icons/calendar.svg" alt='map-marker'></img>
                Schedule for later
                </div>
                </a>
            </div>
            </div>
            </form>

          <div className="header__auth">
            <button onClick={this.handleSearch}>
              <div className="header__button">
                <img src="images/icons/search.svg" alt='map-marker'></img>
                <span>Search</span>
              </div>
            </button>
          <a href="#/"
            class="header__button--auth"
          >
            Sign In
          </a>
          </div>

        </div>
      </header>
    )
  }
}

export default Header;
