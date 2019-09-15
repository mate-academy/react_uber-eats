import React from 'react';

const Main = ({ stores }) => (

  <div className="container-fluid main">
    <div className="row">
      {stores.map(store => (
        <div
          className="col-12 col-sm-6 col-lg-4 col-xl-4 single-card center-block"
          data-aos="zoom-in-down"
        >
          <a href="#!">
            <img
              className="img-fluid card-image rounded shadow-sm"
              src={store.heroImageUrl}
              alt={store.slug}
            />
            <div className="card-title">{store.title}</div>
            <div className="rating-duration">
              <p className="categories">{`${store.categories.join(' • ')}`}</p>
              <span className="closed">{store.closedMessage}</span>
              <span className="rating">
                {store.feedback ? store.feedback.rating : ''}
              </span>
              <span className="rating-count">
                {
                  store.feedback ? `(${store.feedback.ratingCount})` : '0 reviews'}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Main;
