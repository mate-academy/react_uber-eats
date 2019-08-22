/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import getData from '../api/getData';

export default class RestaurantsList extends Component {
  state = {
    restaurants: [],
    // isLoading: false,
  };

  async componentDidMount() {
    const restaurants = await getData();

    this.setState({ restaurants });
  }

  render() {
    const { restaurants } = this.state;

    return (
      <div className="main__container">
        {/* MOBILE SEARCH */}

        <section className="search-box">
          <div className="search-box__search-container">
            <a className="search-box__search-img" href="#" />
            <form className="search-box__input">
              <input
                type="text"
                autoComplete="off"
                className="restaurants-search"
                placeholder="Search for restaurant or cuisine"
              />

              <input
                className="search-box__del-text-btn"
                type="reset"
                value="X"
              />
            </form>
          </div>
        </section>

        <div className="search-box--mobile-wrapper">
          <section className="search-box--mobile">
            <div className="search-box__delivery-time--mobile">
              <p className="search-box_when--mobile">When</p>
              <select className="search-box__asap--mobile">
                <option>ASAP</option>
                <option>TIME</option>
              </select>
            </div>

            <div className="search-box__delivery-location--mobile">
              <a className="location-img--mobile" href="#" />
              <label htmlFor="search--mobile">
                <p>To</p>
                <input
                  type="text"
                  className="address--mobile"
                  placeholder="type address"
                />
              </label>
            </div>
          </section>

          <span className="search-box--mobile-title">
            London Restaurants
          </span>
        </div>

        {/* MOBILE SEARCH */}

        <ul className="main__restaurants">
          {restaurants.map(restor => (
            <li className="main__restaurants-card" key={restor.uuid}>
              <a className="main__restaurants-link" href="/#">
                <div className="main__restaurants-item">
                  <img
                    className="main__restaurants-photo"
                    src={restor.heroImageUrl}
                    alt={restor.slug}
                  />
                </div>
                <div className="main__restaurants-info">
                  <div className="main__restaurants-info-title">
                    {restor.title}
                  </div>
                  <ul className="main__restaurants-info-categories">
                    {restor.categories.map(item => (
                      <li
                        className="main__restaurants-info-categories-item"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="main__restaurants-info-opening">
                    {restor.closedMessage}
                  </div>

                  <div className="main__restaurants-info-waiting">
                    <span className="main__restaurants-info-waiting-text">
                      {restor.etaRange ? restor.etaRange.text : '25-35 min'}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
