import React from 'react';

const Main = ({ stores }) => (

  <main className="main">
    {stores.map(store => (
      <div className="single-card">
        <div className="card-image">
          <img src={store.heroImageUrl} alt={store.slug} />
        </div>
        <div className="card-title">{store.title}</div>
        <div className="rating-duration">
          <p className="categories">{`${store.categories.join(' • ')}`}</p>
          <span className="closed">{store.closedMessage}</span>
          <span className="rating">{store.feedback ? store.feedback.rating : ''}</span>
          <span className="rating-count">{store.feedback ? `(${store.feedback.ratingCount})` : '0'}</span>
        </div>
      </div>
    ))}
  </main>
);

export default Main;
