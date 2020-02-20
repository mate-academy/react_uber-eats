import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import connect from 'react-redux/es/connect/connect';
import RestaurantsList from './components/restaurantsList/restaurantsList';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Pagination from './components/pagination/pagination';

const App = ({ address }) => (
  <div className="app">
    <header className="header app__header">
      <Header />
    </header>
    <main className="main">
      <section className={`restaurants_list ${address
        ? 'app__restaurants_list--mobile'
        : 'app__restaurants_list'}`}
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
});

App.propTypes = {
  address: PropTypes.bool.isRequired,
};

export default connect(mapState2props)(App);
