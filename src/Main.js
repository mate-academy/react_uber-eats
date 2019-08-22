import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ stores }) => (
  <main className="main">
    <div className="main__container">

      <form action="/" className="adress-delivery adress-delivery__main">
        <span>When</span>
        <span>To</span>
        <div htmlFor="destination-details">
          <select
            name=""
            id="destination-details"
            className="adress-delivery__destination-details"
          >
            <option value="ASAP">ASAP</option>
          </select>
        </div>
        <div className="search__container">
          <button type="button" className="dest_btn abs_btn" />
          <img src="img/local.svg" alt="location" />
          <input
            type="text"
            className="destination_input dest_style"
            placeholder="ul. Tarasivska St, 16"
          />
        </div>
      </form>

      <section className="catalog">

        <h1 className="catalog-header">Moscow products</h1>

        <div className="catalog__container">
          {stores.map(store => (
            <section className="product">
              <a href="/#" className="product__photo">
                <img
                  src={store.heroImageUrl}
                  alt="card__restorant"
                />
              </a>
              <div className="product__hiden_details">
                <h2 className="product__name">{store.title}</h2>
                <ul className="product__categories">
                  <li className="product__categories__item">₴₴ • Бургеры</li>
                </ul>
                <p className="product__details">25 - 35 Min</p>
              </div>
              <div className="hidding__product_details">
                <h2 className="product__name">Макдоналдс — Газетный</h2>
                <ul className="product__categories">
                  <li className="product__categories__item">₽₽ • Бургеры</li>
                </ul>
                <p className="product__details">25 - 30 Min</p>
              </div>
            </section>
          ))}
        </div>

      </section>

    </div>
  </main>
);

Main.propTypes = {
  stores: PropTypes.objectOf(
    PropTypes.number,
  ).isRequired,
};

export default Main;
