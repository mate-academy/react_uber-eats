import React from 'react';

class Main extends React.Component {
  arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  render() {
    return (
      <main className="main">
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

        <h1 className="section_header">Moscow Restaurants</h1>
        <section className="product_cards">
          {
            this.arr.map(img => (
              <article className="product_card">
                <a
                  href="/"
                >
                  <img
                    className="product_card-img move-up"
                    src="https://d1ralsognjng37.cloudfront.net/3af51993-a1c7-4601-b195-f6775f9fab88"
                    alt=""
                  />
                </a>
                <p className="product_card-name">Макдоналдс — Газетный</p>
                <p className="product_card-class">₽₽ • Бургеры</p>
                <p className="product_card-delivery_time">25 - 35 Min</p>
              </article>
            ))
          }
        </section>
      </main>
    );
  }
}

export default Main;
