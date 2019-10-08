import React from 'react';
// import PropTypes from 'prop-types';
import './RestaurantPage.scss';
import { ItemCard } from '../ItemCard';

export class RestaurantPage extends React.Component {
  state = {
    restaurantData: [],
  }

  componentDidMount() {
    const { uuid } = this.props;

    fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${uuid}`)
      .then(res => res.json())
      .then(data => this.setState({ restaurantData: data }));
  }

  render() {
    const {
      title,
      etaRange,
      location,
      priceBucket,
      cuisineList,
      sections,
      sectionMap,
      entitiesMap,
    } = this.state.restaurantData.data;

    return (
      <section className="restaurant-page">
        <div className="restaurant-page__top-part">
          <img src="" alt="" className="restaurant-page__main-img" />
          <div className="restaurant-page__rest-details">
            <h1 className="restaurant-page__main-title">
              {title}
            </h1>
            <p className="restaurant-page__description">
              {`${priceBucket}${cuisineList.join(' • ')}`}
            </p>
            <p className="restaurant-page__time">
              {etaRange.text}
            </p>
            <p className="restaurant-page__location">
              {location.address}
            </p>
          </div>
        </div>

        <div className="restaurant-page__main-content">
          <nav>
            <ul className="restaurant-page__navigation">
              {sections.map(section => (
                <li>
                  <a href="##">
                    {sectionMap[section].title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="restaurant-page__menu">
            {sections.map(section => (
              <div className="restaurant-page__menu-item">
                <h2 className="restaurant-page__menu-item-title">
                  {sectionMap[section].title}
                </h2>
                <div className="restaurant-page__menu-container">
                  {sectionMap[section].itemUuids.map((item) => {
                    const {
                      title,
                      description,
                      price,
                      imgUrl,
                      uuid,
                    } = entitiesMap[item];

                    return (
                      <ItemCard
                        title={title}
                        description={description}
                        price={price}
                        imgUrl={imgUrl}
                        key={uuid}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const RestaurantPagePropTypes = {
  // always use prop types!
};

RestaurantPage.propTypes = RestaurantPagePropTypes;
