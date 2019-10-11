import React from 'react';
import propTypes from 'prop-types';

class Main extends React.Component {
  store = {
    query: '',
  };

  render() {
    const {
      location,
      restaurantsList,
    } = this.props;

    return (
      <main className="main centered">
        <form className="destination_container big_hide" action="#">
          <span className="dest">When</span>
          <select
            name="time_select dest_style"
            id="time_select-2"
            className="time__selector"
          >
            <option value="now" selected>ASAP</option>
            <option value="plan">Schedule</option>
          </select>
          <span className="dest"> To: </span>
          <input
            type="text"
            name="adress"
            className="destination_input dest_style"
            id="delivery_place-2"
            value="ul. Bolshaya Dmitrovka,22"
          />
        </form>

        <h1 className="section_header">{`${location} Restaurants`}</h1>
        <section className="product_cards">
          {
            Object.keys(restaurantsList).map(restaurant => (
              <a href="/" className="product_card">
                <figure
                  className="product_card--figure"
                >
                  <img
                    className="product_card-img move-up"
                    src={restaurantsList[restaurant].heroImageUrl}
                    alt="food"
                  />
                </figure>
                <p
                  className="product_card-name"
                >
                  {restaurantsList[restaurant].title}
                </p>
                <p className="product_card-class">
                  {
                    restaurantsList[restaurant]
                      .categories.map((category, index) => (
                        index !== restaurantsList[restaurant]
                          .categories.length - 1 ? (
                            <span
                              className="product_card-class"
                            >
                              {`${category} • `}
                            </span>
                          ) : (
                            <span
                              className="product_card-class"
                            >
                              {category}
                            </span>
                          )
                      ))
                  }
                </p>
                {
                  restaurantsList[restaurant].feedback ? (
                    <span className="product_card--span">
                      <p className="product_card-delivery_time">25 - 35 Min</p>
                      <p className="product_card-rating">
                        {`${restaurantsList[restaurant].feedback.rating}  `}
                        <svg
                          style={{ width: 24, height: 24 }}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill={
                              restaurantsList[restaurant].feedback.rating > 4.5
                                ? 'gold' : '#000000'}
                            d="M12,17.27L18.18,21L16.54,
                            13.97L22,9.24L14.81,8.62L12,
                            2L9.19,8.62L2,9.24L7.45,
                            13.97L5.82,21L12,17.27Z"
                          />
                        </svg>

                        {
                          `  (${restaurantsList[restaurant]
                            .feedback.ratingCount})`}
                      </p>
                    </span>
                  ) : (
                    <p className="closedMessage product_card-class">
                      {restaurantsList[restaurant].closedMessage}
                    </p>
                  )
                }
              </a>
            ))
          }
        </section>
      </main>
    );
  }
}

Main.propTypes = {
  location: propTypes.string.isRequired,
  restaurantsList: propTypes.objectOf(propTypes.object).isRequired,
};

export default Main;
