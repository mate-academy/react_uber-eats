import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Header extends React.Component {
  state = {
    isLocation: false,
    isSearch: false,
    isDelivered: false,
    valueTextInput: 'Google',
    valueRestaurant: '',
    timeDelivery:'Deliver now',
  }

  handleDelivery = () => {
    this.setState({
      isLocation: false,
      isSearch: false,
      isDelivered: !this.state.isDelivered,
    })

    document.addEventListener('click', this.handleClickOutside, true);
  }

  changeTimeDelivery = (timeDelivery) => {
    this.setState({
      timeDelivery,
      isDelivered: !this.state.isDelivered,
    })
  }

  handleLocation = () => {
    this.setState({
      isLocation: !this.state.isLocation,
      isSearch: false,
      isDelivered: false,
    })

    document.addEventListener('click', this.handleClickOutside, true);
  }

  handleSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch,
      isLocation: false,
      isDelivered: false,
    })

    document.addEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
      this.setState({
        isSearch: false,
        isLocation: false,
        isDelivered: false,
      });
  }
  }

  filterRestaurant = (event) => {
    const { value } = event.target;

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
      valueTextInput: '',
    })
  }

  clearTextRestaurant = () => {
    this.setState({
      valueRestaurant: '',
    })

    this.props.searchRestaurant('');
  }

  render() {
    const {
      isLocation,
      isSearch,
      isDelivered,
      valueTextInput,
      valueRestaurant,
      timeDelivery,
    } = this.state;

    return (
      <header>
        <div class="header__top">
          <div>
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
                  <form className="header__location-input">
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
                  </form>
                )}

              <div className="header__dropdown">
                <button onClick={this.handleDelivery}>
                  <div className={classnames({
                    "header__button": true,
                    "header__active": isDelivered,
                  })}
                  >
                    <img src="images/icons/time.svg" alt='map-marker'></img>
                    <span>{timeDelivery}</span>
                  </div>
                </button>

                {isDelivered ? (
                  <div className="header__dropdown-child" >
                    <button onClick={() => this.changeTimeDelivery('Deliver now')}>
                      <div className="header__button">
                        <img src="images/icons/time.svg" alt='map-marker'></img>
                        <span>Deliver now</span>
                      </div>
                    </button>
                    <button onClick={() => this.changeTimeDelivery('Schedule for later')}>
                      <div className="header__button">
                        <img src="images/icons/calendar.svg" alt='map-marker'></img>
                        <span>Schedule for later</span>
                      </div>
                    </button>
                  </div>
                ) : ('')}

              </div>
            </div>
          </div>

          <div className="header__auth">
            {!isSearch ? (
              <button onClick={this.handleSearch}>
                <div className="header__button">
                  <img src="images/icons/search.svg" alt='map-marker'></img>
                  <span>Search</span>
                </div>
              </button>) : (
                <form className="header__location-input">
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
                </form>
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
