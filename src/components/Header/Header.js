import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import './Header.scss';

export class Header extends PureComponent {
  state = {
    address: '',
    addressPlaceholder: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  toggleSearch = () => {
    this.setState(prevState => ({
      isMobileSearchVisible: !prevState.isMobileSearchVisible,
      isMobileDeliveryInfoVisible: false,
    }));
  }

  toggleDeliveryInfo = () => {
    this.setState(prevState => ({
      isMobileDeliveryInfoVisible: !prevState.isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    }));
  }

  closeMobile = () => {
    this.setState({
      isMobileDeliveryInfoVisible: false,
      isMobileSearchVisible: false,
    });
  }

  handleDropdownVariantsClick = (id, title) => {
    const { addCurrentLocation } = this.props;

    addCurrentLocation(id);
    this.setState({
      addressPlaceholder: title,
      address: '',
    });
  }

  render() {
    const {
      address,
      addressPlaceholder,
      time,
      search,
      isMobileSearchVisible,
      isMobileDeliveryInfoVisible,
    } = this.state;

    const { locationsVariants } = this.props;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <Link to="/">
              <img
                src="./images/LogoHeader.svg"
                alt="UberEats"
                className="header__logo"
              />
            </Link>
            <div className="header__delivery-info">
              <div className="header__locations-info">
                <Input
                  name="address"
                  value={address}
                  placeholder={addressPlaceholder || 'Address'}
                  iconUrl="./images/locationImg.svg"
                  onChange={this.handleChange}
                />

                {
                  this.state.address && (
                    <div className="header__dropdown" id="header__dropdown">
                      {
                        locationsVariants
                          .filter(({ title }) => title
                            .toLowerCase()
                            .includes(this.state.address.toLowerCase()))
                          .map(({ title, id }) => (
                            <button
                              className="header__dropdown-button"
                              type="button"
                              key={id}
                              onClick={() => this
                                .handleDropdownVariantsClick(id, title)}
                            >
                              <Link to="/">
                                <img
                                  src="./images/locationImg.svg"
                                  alt="search icon"
                                  className="header__dropdown-button-img"
                                />
                                <p className="header__dropdown-button-title">
                                  {title}
                                </p>
                              </Link>
                            </button>
                          ))
                      }
                    </div>
                  )
                }
              </div>
              <Input
                name="time"
                type="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
              />
            </div>
            <Input
              className="header__search"
              name="search"
              value={search}
              placeholder="Search"
              onChange={this.handleChange}
              iconUrl="./images/headerSearchIcon.svg"
            />
            <div className="header__toogle-buttons">
              <button
                type="button"
                className="header__toogle-btn"
                onClick={this.toggleDeliveryInfo}
              >
                <img
                  src="./images/locationImg.svg"
                  alt="search icon"
                />
              </button>
              <button
                type="button"
                className="header__toogle-btn"
                onClick={this.toggleSearch}
              >
                <img
                  src="./images/headerSearchIcon.svg"
                  alt="place icon"
                />
              </button>
            </div>
            <a className="header__link" href="##">
            Sign In
            </a>
          </div>
          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  placeholder="Search"
                  onChange={this.handleChange}
                  iconUrl="./images/headerSearchIcon.svg"
                  isSmall={false}
                />
              )}
              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="Where"
                    name="time"
                    type="time"
                    value={time}
                    onChange={this.handleChange}
                    placeholder="Time"
                    isSmall={false}
                  />
                  <Input
                    label="To"
                    name="address"
                    value={address}
                    placeholder="Address"
                    iconUrl="./images/locationImg.svg"
                    onChange={this.handleChange}
                    isSmall={false}
                  />
                </>
              )}
              <button
                type="button"
                className="mobile-controls__close"
                onClick={this.closeMobile}
              >
                <img
                  src="./images/headerCross.svg"
                  alt="close"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  addCurrentLocation: PropTypes.func.isRequired,
  locationsVariants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  })),
};

Header.defaultProps = {
  locationsVariants: [],
};
