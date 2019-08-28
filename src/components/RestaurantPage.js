import React, { Component } from 'react';

import { getReastaurant } from '../api/getData';

// import MyModal from './MyModal';

export default class RestaurantPage extends Component {
  state = {
    menu: {},
    navs: [],
    dishes: [],
  }

  async componentDidMount() {
    const RESTAURANT_PATH
      = '/restaurants/17231840-0c52-40ae-9735-b37b6f113e4e.json';

    const menu = await getReastaurant(RESTAURANT_PATH);

    const navs = Object.keys(menu.subsectionsMap)
      .map(key => menu.subsectionsMap[key]);

    // const data = menu
    // const data = Object.keys(menu).map(key => menu[key]);

    const data = Object.keys(menu.sectionEntitiesMap).map(
      key => menu.sectionEntitiesMap[key]
    );

    const dishes = Object.keys(data[0]).map(key => data[0][key]);

    // console.log("dishes", dishes);
    // console.log('navs', navs);
    // console.log('menu', menu);

    this.setState({ navs, dishes, menu });
  }

  render() {
    const { navs, dishes } = this.state;

    return (
      <div className="restaurant">
        <div className="restaurant__header">
          {/* {this.state.menu.heroImageUrls.map(item => (
            <img src={item[5].url} alt={item[5].url} key={item[5].url} />
          ))} */}
          <img
            src="/images/background-topdog.jpeg"
            // src="https://hlybchenko.github.io/react_uber-eats/
            // images/background-topdog.jpeg"
            alt="header-top-dogs"
          />
        </div>
        <div className="restaurant__container">
          <nav className="restaurant__nav-block">
            <ul className="restaurant__nav-links">
              {navs.map(item => (
                <li key={item.uuid} className="restaurant__nav-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </nav>
          <hr className="restaurant__line" />
        </div>

        <div className="restaurant__products">
          <h2>{this.state.menu.title}</h2>
          {/* <h4>{this.state.menu.location.city}</h4> */}
          <ul className="restaurant__products-cards">
            {dishes.map(item => (
              <li key={item.uuid} className="restaurant__products-item">
                {/* <div> */}
                {/* <a href="/#"> */}
                <div className="restaurant__products-item-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>
                    {item.price / 100}
                    {' '}
                    GBP
                  </p>
                </div>
                <img
                  className="restaurant__products-item-photo"
                  src={item.imageUrl}
                  alt={item.title}
                />
                {/* </a> */}
                {/* </div> */}
              </li>
            ))}
          </ul>

          {/* <MyModal /> */}
        </div>
      </div>
    );
  }
}
