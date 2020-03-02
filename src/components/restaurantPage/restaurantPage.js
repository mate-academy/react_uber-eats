import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../header/header';
import Footer from '../footer/footer';
import { loadSelectedRestaurant } from '../../store/actions';
import RestaurantNav from '../restaurantNav/restaurantNav';
import RestaurantMenu from '../restaurantMenu/restaurantMenu';

const RestaurantPage = ({ restaurant, loadRestaurant }) => {
  const { uuid } = useParams();

  useEffect(() => {
    loadRestaurant(uuid);
  }, []);

  return (
    <div className="app">
      <header className="header header_restaurant_page">
        <Header />
      </header>
      <main className={`${!restaurant ? 'loader' : 'restaurant'}`}>
        {restaurant === null ? (
          <div className="spinner">
            <CircularProgress />
          </div>
        ) : (
          <>
            <section
              className="restaurant__head"
              style={{
                backgroundImage: `url(${restaurant.heroImageUrls[5].url})`,
              }}
            >
              <div className="restaurant__heading_block">
                <h1 className="restaurant__heading">{restaurant.title}</h1>

                <span className="restaurant__category">
                  {`${restaurant.categories.join(` • `)}`}
                </span>

                <span
                  className="restaurant_card__time"
                >
                  {restaurant.etaRange !== null
                    ? restaurant.etaRange.replace(/–/, ' - ')
                    : '30 - 45 min'}
                </span>

                <address className="restaurant__address">
                  {
                    `${restaurant.location.address}
                     ${restaurant.location.country} • `
                  }
                  <Link
                    to="/"
                    className="restaurant__link"
                  >
                    More info
                  </Link>
                </address>
              </div>
            </section>
            <RestaurantNav restaurant={restaurant} />
            <section className="restaurant__menu menu">
              <RestaurantMenu />
            </section>
          </>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

const mapState2Props = state => ({
  restaurant: state.restaurant,
});

const mapDispatch2Props = ({
  loadRestaurant: loadSelectedRestaurant,
});

RestaurantPage.propTypes = {
  restaurant: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  loadRestaurant: PropTypes.func,
};

RestaurantPage.defaultProps = {
  restaurant: {},
  loadRestaurant: '',
};
export default connect(mapState2Props, mapDispatch2Props)(RestaurantPage);
