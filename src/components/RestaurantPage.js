import React from 'react';
import { Link } from 'react-router-dom';

import { getRestaurant } from '../api/getDate';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

class RestaurantPage extends React.Component {
  state = {
    restaurant: [],
    loading: false,
  }

  async componentDidMount() {
    try {
      const restaurant = await getRestaurant();

      this.setState({
        restaurant,
        loading: true,
      })
    } catch (error) {
      this.setState({
        errors: 'Restaurant was not found',
      })
    };
  }

  render() {
    const { loading, errors, restaurant } = this.state;

    return (
      <main>
        {!errors
          ? (loading
            ? (
              <>
                <Header />
                <section class="catalog">
                  {restaurant.map(restaurant =>

                    <Link to={`/restaurant/${restaurant.uuid}`} className="catalog__item">
                      <div href="#/" class="catalog__item--image">
                        <img src={restaurant.heroImageUrl} alt="mcdonalds" />
                      </div>
                      <div href="#/" class="catalog__item--name">
                        <h2>{restaurant.title}</h2>
                      </div>
                      <div className="catalog__item--categoria">
                        {restaurant.categories.map(categoria => (
                          <p class="catalog__item--cuisine">{categoria}</p>
                        ))}
                      </div>
                      <p class="catalog__item--delivery-time">
                        {restaurant.etaRange ? restaurant.etaRange.text : '10–30 min'}
                      </p>
                    </Link>
                  )}
                </section>
                <Footer />
              </>
            )
            : <Loading />
          ) : (
            <h1 className="error-title centr">{errors}</h1>
          )}
      </main>
    )
  }
}

export default RestaurantPage;
