import React from 'react';

class Header extends React.Component {
  state = {
    isLocation: false,
    isSearch: false,
    valueTextInput : 'Google',
    valueRestaurant : '',
  }

  handleLocation = () => {
    this.setState({
      isLocation: !this.state.isLocation,
      isSearch: false,
    })
  }

  handleSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch,
      isLocation: false,
    })
  }

  filterRestaurant = (event) => {
    const {value} = event.target;

    this.setState({
      valueRestaurant: value,
    })

    this.props.searchRestaurant(value);
  }

  updateInputLocation = (event) => {
    this.setState({
      valueTextInput: event.target.value,
    })
  }

  clearText = () => {
    this.setState({
      valueTextInput : '',
    })
  }

  clearTextRestaurant = () => {
    this.setState({
      valueRestaurant : '',
    })

    this.props.searchRestaurant('');
  }

  render() {
    const { isLocation, isSearch, valueTextInput, valueRestaurant } = this.state;
    console.log(isLocation);

    return (
      <header>
        <div class="header__top">
          <form>
            <div className="header__location-section">
              <a href="#" >
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
                  class="header__logo"
                />
              </a>

              {!isLocation ? (
                <button onClick={this.handleLocation}>
                  <div className="header__button">
                    <img src="images/icons/location.svg" alt='map-marker'></img>
                    <span>London</span>
                  </div>
                </button>) : (
                  <div className="header__location-input">
                    <div>
                      <img src="images/icons/location.svg" alt='map-marker'></img>
                      <input
                        onChange={this.updateInputLocation}
                        type="text"
                        name="userQuery"
                        placeholder="Enter shipping address"
                        value={valueTextInput}
                      />
                    </div>
                    <button
                      onClick={this.clearText}
                      type="button"
                    >
                      Clear
                    </button>
                    <div className="header__vertical-line"></div>
                    <button
                      onClick={this.handleLocation}
                      type="button"
                    >
                      <img src="images/icons/close.svg" alt='map-marker'></img>
                    </button>
                  </div>
                )}

              <div className="header__dropdown">
                <select className="header__dropdown-select">
                  <option class="header__dropdown-child">
                    Deliver now
                </option>
                  <option className="header__dropdown-child">
                    Schedule for later
                </option>
                </select>
              </div>
              </div>
            </form>

            <div className="header__auth">
              {!isSearch ? (
                <button onClick={this.handleSearch}>
                  <div className="header__button">
                    <img src="images/icons/search.svg" alt='map-marker'></img>
                    <span>Search</span>
                  </div>
                </button>) : (
                  <div className="header__location-input">
                    <div>
                      <img src="images/icons/search.svg" alt='map-marker'></img>
                      <input
                        onChange={this.filterRestaurant}
                        type="text"
                        name="userQuery"
                        placeholder="What would you like?"
                        value={valueRestaurant}
                      />
                    </div>
                    <button
                      onClick={this.clearTextRestaurant}
                      type="button"
                    >
                      Clear
                    </button>
                    <div className="header__vertical-line"></div>
                    <button
                      onClick={this.handleSearch}
                      type="button"
                    >
                      <img src="images/icons/close.svg" alt='map-marker'></img>
                    </button>
                  </div>
                )}

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
