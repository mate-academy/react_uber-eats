import React from 'react';
import { Link } from 'react-router-dom';

import { getRestaurants } from '../api/getDate';
import Loading from './Loading';
import MainSection from './MainSection';
import Header from './Header';
import Footer from './Footer';

class HomePage extends React.Component {
  state = {
    restaurants: [],
    loading: false,
    errors: null,
    filterRestaurants: '',
  }

  async componentDidMount() {
    try {
      const restaurants = await getRestaurants();
      const uuidRestaurants = restaurants.data.feedItems.map(item =>
        restaurants.data.storesMap[item.uuid]);

      this.setState({
        restaurants: uuidRestaurants,
        filterRestaurants: uuidRestaurants,
        loading: true,
      })
    } catch (error) {
      this.setState({
        errors: 'Restaurants was not found',
      })
    };
  }

  debounceSearch = (f, delay) => {
    let timerId = 0;
    const wrapper = function(...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => f.apply(this, [...args]),delay);
    };

    return wrapper;
  }

  searchRestaurant = (query) => {
    this.setState(state => ({
      filterRestaurants: state.restaurants.filter(store => (
        store.title.toLowerCase().includes(query.toLowerCase().trim())
      )),
    }));
  }

  render() {
    const { loading, errors, filterRestaurants, restaurants } = this.state;
    const wrapper = this.debounceSearch(this.searchRestaurant, 1000);

    return (
      <main>
        {!errors
          ? (loading
            ? (
              <>
                <Header searchRestaurant={wrapper} />
                <MainSection searchRestaurant={this.searchRestaurant} />
                {filterRestaurants.length > 0 ?
                  (<section class="catalog">
                    {filterRestaurants.map(restaurant =>

                      <Link
                        to={`/restaurant/d7c942e8-d2b3-4004-b964-d8e008da75b0`}
                        className="catalog__item"
                      >
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
                  </section>) : (
                    <>
                      <div className="catalog__empty">
                        Your search did not match any
                      </div>
                      <div className="catalog__empty--secondary-info">
                        Try looking for something else
                      </div>
                      <a className="catalog__all-btn" href="/">
                        View all restaurants
                      </a>
                    </>
                  )
                }
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

export default HomePage;
