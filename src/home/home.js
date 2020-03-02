import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import RestaurantsList from '../components/restaurantsList/restaurantsList';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Pagination from '../components/pagination/pagination';
import '../App.scss';

const Home = ({ address, restaurants }) => (
  <div className="app">
    <header className="header app__header header_restaurant_page">
      <Header />
    </header>
    <main className="main">
      <section className={`restaurants_list ${address
        ? 'app__restaurants_list--mobile'
        : 'app__restaurants_list'} ${restaurants === null ? 'loader' : ''}`}
      >
        <RestaurantsList />
      </section>
      <Pagination />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

const mapState2props = state => ({
  address: state.address,
  restaurants: state.restaurants,
});

Home.propTypes = {
  address: PropTypes.bool.isRequired,
  restaurants: PropTypes.shape({
    countdowns: PropTypes.array,
    diningModes: PropTypes.array,
    feedItems: PropTypes.array,
    storesMap: PropTypes.object,
    meta: PropTypes.object,
    currencyCode: PropTypes.string,
    citySlug: PropTypes.string,
    isInServiceArea: PropTypes.bool,
    cacheKey: PropTypes.string,
  }),
};

Home.defaultProps = {
  restaurants: null,
};

export default connect(mapState2props)(Home);
