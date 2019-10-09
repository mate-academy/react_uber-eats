import React from 'react';
import propTypes from 'prop-types';

class Main extends React.Component {
  store = {
    query: '',
  };

  render() {
    const {
      location,
    } = this.props;

    const arr = [1, 1, 1, 1, 1, 1];

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
            arr.map(img => (
              <a href="/" className="product_card">
                <figure
                  className="product_card--figure"
                >
                  <img
                    className="product_card-img move-up"
                    src="https://d1ralsognjng37.cloudfront.net/3af51993-a1c7-4601-b195-f6775f9fab88"
                    alt="food"
                  />
                </figure>
                <p className="product_card-name">Макдоналдс — Газетный</p>
                <p className="product_card-class">₽₽ • Бургеры</p>
                <span className="product_card--span">
                  <p className="product_card-delivery_time">25 - 35 Min</p>
                  <p className="product_card-rating">
                    {'4.0 '}
                    <img src="" alt="star" />
                    {' num'}
                  </p>
                </span>
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
};

export default Main;
