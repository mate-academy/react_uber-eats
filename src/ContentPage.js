import React from 'react';

const ContentPage = ({ stores }) => {

  return (
    <main class="content">

      <div class="card-list">

        {stores.map(store => (
          <div class="product-card">
            <a class="card-link" href="#">
              <img class="product-card__img" src={store.heroImageUrl} alt="food" />
              <div class="product-card__caption">{store.title}</div>
              <div class="product-card__type">{store.categories.join(" • ")}</div>
              <div class="product-card__time">
                <div>{store.etaRange.text ? store.etaRange.text : 'ASAP'}</div>
                </div>
            </a>
          </div>
        ))}


      </div>
    </main>
  )
}

export default ContentPage;
