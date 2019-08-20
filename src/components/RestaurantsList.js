import React from 'react';

const RestaurantsList = () => (
  <main class="main">
    <div class="main__delivery-form">
      <form class="delivery" action="#">
        <span class="delivery__span">Когда</span>

        <select name="order-time" aria-label="select delivery time" class="delivery__time">
          <option value="now" selected>Сейчас</option>
          <option value="plan">Запланировать заказ</option>
        </select>

        <span class="delivery__span">Кому</span>

        <input type="text"
          name="delivery-adress"
          class="delivery__adress"
          aria-label="choose delivery adress"
          placeholder="ул. Тарасовская, 16"
        />
      </form>
    </div>

    <div class="card-list">
      {function() {
        const restaurants = [];
        for (let i = 0; i < 19; i ++) {
          restaurants[i] = (
            <article class="card">
              <a href="#"><img src="img/1-4.png" alt="fast food" class="card__picture" /></a>
              <h2 class="card__title">McDonald's</h2>
              <div class="card__tags">₴₴ • Burgers</div>
              <div>25-35 Min</div>
            </article>
          )
        }

        return restaurants;
      }()}
    </div>
  </main>
);

export default RestaurantsList;
