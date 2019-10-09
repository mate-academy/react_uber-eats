import React from 'react';
import propTypes from 'prop-types';
import * as Api from './Api';

class Header extends React.Component {
  state = {
    query: this.props.query,
    autoCompleteList: {},
  };

  headerStyle = {
    position: 'fixed',
    width: '100%',
    background: 'white',
    zIndex: '1',
    top: 0,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
  };

  search = (event) => {
    event.preventDefault();
    this.props.handleCityChange(this.state.query);
    this.props.closeSearch();
  };

  handleChange = async(event) => {
    const val = event.target.value;
    const list = await Api.AutoComplete(this.state.query);

    if (val) {
      this.setState({
        query: val,
        autoCompleteList: list,
      });
    } else {
      this.setState({
        query: '',
        autoCompleteList: {},
      });
    }
  };

  locChose = (val) => {
    this.setState({ query: val });
    this.props.handleCityChange(val);
    this.props.closeSearch();
  };

  openSearch = (searchType) => {
    if (searchType === 'location') {
      this.props.openLocSearch();
    }
  };

  discardChange = (event) => {
    if (event.keyCode === 27) {
      this.setState({ query: this.props.query });
      this.props.closeSearch();
    }
  };

  blurDiscard = () => {
    this.props.closeSearch();
  };

  render() {
    const {
      autoCompleteList,
    } = this.state;

    const {
      shoudStick,
      locationSearchOpen,
    } = this.props;

    return (
      <header
        style={shoudStick ? this.headerStyle : {}}
      >
        <section className="header_section">
          <a href="/" className="logo_link">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo.svg`}
              alt="Uber Eats"
              className="logo"
            />
          </a>
          <div className="header_section--nav">
            <div className="destination_container big_show">
              <form
                onSubmit={this.search}
                onBlur={this.blurDiscard}
                className="form location"
              >
                <div className="inner">
                  <div className="search_img">
                    <svg style={{ width: 21, height: 21 }} viewBox="0 0 24 24">
                      <path
                        fill="#000000"
                        d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,
                    2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,
                    11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22
                     19,14.25 19,9A7,7 0 0,0 12,2Z"
                      />
                    </svg>
                  </div>
                  <input
                    name="search"
                    type="text"
                    className={`
                    input
                    search_input
                    ${locationSearchOpen ? 'active_search' : ''}
                    `}
                    placeholder="Enter City"
                    value={this.state.query}
                    onClick={() => this.openSearch('location')}
                    onChange={(event) => {
                      this.handleChange(event);
                    }}
                    onKeyDown={this.discardChange}
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="clear"
                    onClick={(event) => {
                      this.handleChange(event);
                    }}
                  >
                    Clear
                  </button>
                  <div className="bulkhead" />
                  <button type="button" className="close" disabled>
                    <svg style={{ width: 21, height: 21 }} viewBox="0 0 24 24">
                      <path
                        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,
                      12L5,17.59L6.41,19L12,13.41L17.59,19L19,
                      17.59L13.41,12L19,6.41Z"
                      />
                    </svg>
                  </button>
                </div>
                {
                  autoCompleteList.length > 0 && locationSearchOpen ? (
                    <ul
                      className="location_search--autocomplete"
                    >
                      {
                        autoCompleteList.map(city => (
                          <li
                            key={city.id}
                            className="autocomplete_address"
                            onClick={() => {
                              this.locChose(city.addressLine1);
                            }}
                          >
                            {city.addressLine1}
                          </li>
                        ))
                      }
                    </ul>
                  ) : ('')
                }
              </form>
              <button
                type="button"
                className="delivery_btn"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/time.png`}
                  alt=""
                />
                Deliver Now
              </button>
            </div>

            <div className="header_btn-container">
              <form className="form search">
                <div className="inner">
                  <div className="search_img">
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                      <path
                        fill="#000000"
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,
                      13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,
                      14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,
                      6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,
                      14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                      />
                    </svg>
                  </div>
                  <input
                    name="search"
                    type="text"
                    className="input"
                    placeholder="Search"
                  />
                  <button
                    type="button"
                    className="clear"
                    disabled
                  >
                    Clear
                  </button>
                  <div className="bulkhead" />
                  <button
                    type="button"
                    className="close"
                    disabled
                  >
                    <svg style={{ width: 21, height: 21 }} viewBox="0 0 24 24">
                      <path
                        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,
                      12L5,17.59L6.41,19L12,13.41L17.59,19L19,
                      17.59L13.41,12L19,6.41Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <a
                href="/"
                className="header_btn header_btn-sign_in"
              >
                Sign In
              </a>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  shoudStick: propTypes.bool.isRequired,
  query: propTypes.string.isRequired,
  handleCityChange: propTypes.func.isRequired,
  openLocSearch: propTypes.func.isRequired,
  closeSearch: propTypes.func.isRequired,
  locationSearchOpen: propTypes.bool.isRequired,
};

export default Header;
