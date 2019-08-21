import React from 'react';

import {getRestaurants} from '../api/getDate';
import Loading from './Loading';

class HomePage extends React.Component {
  state = {
    restaurants: [],
    loading: false,
    errors: null,
  }

  async componentDidMount() {
    try {
      const restaurants = await getRestaurants();
      const uuidRestaurants = restaurants.data.feedItems.map(item => restaurants.data.storesMap[item.uuid]);

      this.setState({
        restaurants: uuidRestaurants,
        loading: true,
      })
    } catch (error) {
      this.setState({
        errors: 'Phone was not found',
      })
    };
  }

  render() {
    const { loading, errors, restaurants } = this.state;

    return (
      !errors
      ? (loading
        ? (
        <section class="catalog">
          {restaurants.map(restaurant =>

          <article class="catalog__item">
            <a href="#/" class="catalog__item--image">
              <img src={restaurant.heroImageUrl} alt="mcdonalds" />
            </a>
            <a href="#/" class="catalog__item--name">
              <h2>{restaurant.title}</h2>
            </a>
            <div className="catalog__item--categoria">
              {restaurant.categories.map(categoria => (
                <p class="catalog__item--cuisine">{categoria}</p>
              ))}
            </div>
            <p class="catalog__item--delivery-time">
              {restaurant.etaRange ? restaurant.etaRange.text : '10–30 min'}
            </p>
          </article>
          )}
        </section>
        )
        : <Loading />
      ) : (
        <h1 className="error-title centr">{errors}</h1>
      )
    )
  }
}

export default HomePage;
