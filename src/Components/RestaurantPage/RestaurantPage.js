import React from 'react';
import './RestaurantPage.scss';
import { ItemCard } from '../ItemCard';
import { Loader } from '../Loader';
import { RestaurantPagePropTypes } from '../PropTypes';

export class RestaurantPage extends React.Component {
  state = {
    restaurantData: null,
  }

  componentDidMount() {
    const { uuid } = this.props;

    fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${uuid}`)
      .then(res => res.json())
      .then(({ data }) => this.setState({ restaurantData: data }));
  }

  render() {
    const {
      restaurantData,
    } = this.state;

    if (!restaurantData) {
      return <Loader />;
    }

    return (
      <section className="restaurant-page">
        <div className="restaurant-page__top-part">
          <img
            src={restaurantData
              .heroImageUrls[restaurantData.heroImageUrls.length - 1].url}
            alt=""
            className="restaurant-page__main-img"
          />
          <div className="restaurant-page__rest-details">
            <h1 className="restaurant-page__main-title">
              {restaurantData.title}
            </h1>
            <p className="restaurant-page__description">
              {`${restaurantData.priceBucket} ${restaurantData.cuisineList
                .join(' • ')}`}
            </p>
            <p className="restaurant-page__time">
              {restaurantData.etaRange
                ? restaurantData.etaRange.text
                : '35 - 45 min'}
            </p>
            <p className="restaurant-page__location">
              {restaurantData.location.address}
            </p>
          </div>
        </div>

        <div className="restaurant-page__main-content content">
          <nav>
            <ul className="restaurant-page__navigation">
              {restaurantData.sections.map(section => (
                <li key={restaurantData.sectionsMap[section].title}>
                  <a href="##" className="restaurant-page__navigation-link">
                    {restaurantData.sectionsMap[section].title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="restaurant-page__menu">
            {restaurantData.sections.map(section => (
              <div
                className="restaurant-page__menu-item"
                key={restaurantData.sectionsMap[section].title}
              >
                <h2 className="restaurant-page__menu-item-title">
                  {restaurantData.sectionsMap[section].title}
                </h2>
                <div className="restaurant-page__menu-container">
                  {restaurantData.sectionsMap[section].itemUuids.map((item) => {
                    const {
                      title,
                      description,
                      price,
                      imageUrl,
                      uuid,
                    } = restaurantData.entitiesMap[item];

                    return (
                      <ItemCard
                        title={title}
                        description={description}
                        price={price}
                        imgUrl={imageUrl}
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

RestaurantPage.propTypes = RestaurantPagePropTypes;
