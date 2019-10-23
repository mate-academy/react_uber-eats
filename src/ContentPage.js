import React from 'react';

const ContentPage = ({ stores }) => {
  return (
    <main className="content">
      <div className="card-list">
        {stores.map(store => (
          <div className="product-card">
            <a className="card-link" href="#">
              <div className="img-wrapper">
              <img
                className="product-card__img"
                src={store.heroImageUrl}
                alt="food"
              />
              </div>
              <div className="product-card__caption">{store.title}</div>
              <div className="product-card__type">
                {store.categories.join(" • ")}
              </div>
              <div className="product-card__time">
                <div className="product-card__time-el">{store.etaRange.text ? store.etaRange.text : "ASAP"}</div>
                <div className="product-card__time-el">
                  <span>{store.feedback.rating}</span>
                  <img className="star" src="/images/icons/star.svg"/>
                  <span>({store.feedback.ratingCount})</span>
                  </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ContentPage;
