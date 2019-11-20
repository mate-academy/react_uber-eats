import React from 'react';
import { getData } from '../getData/getData';
import './Main.css';

class Main extends React.Component {
  state = {
    restaurants: [],
  };

  async componentDidMount() {
    const stores = await getData();

    this.setState({
      restaurants: stores,
    });
  }

  render() {
    const { restaurants } = this.state;
    const restaurantsList = restaurants.map(item => (
      <div className="catalog__row-block">
        <a href="#/" className="catalog__row-block--link">
          <img
            className="catalog__row-block--link--img"
            src={item.heroImageUrl}
            alt={item.slug}
          />
          <div className="catalog__row-block--wrapper">
            <p className="restaurant-table">{item.title}</p>

            <div className="catalog-items">
              <ul> {item.categories.map(category => (
                <li className="catalog-items__snack">{category}</li>
              ))}
              </ul>
            </div>
            <div className="catalog__delivery">
              <p
                className="time"
              >
                {item.etaRange ? item.etaRange.text : 'ASAP'}
              </p>
              <div className="rating">
                {item.feedback
                  ? item.feedback.rating
                  : ''}
                {item.feedback
                  ? ((item.feedback.rating < 4.5)
                    ? <img className="rating__img" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/972e1cb487b3a5c72c30a6635596f477.svg" alt="" />
                    : <img className="rating__img" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/92367108b11b8ee48b6f29cb3fef2d4d.svg" alt="" />
                  )
                  : ''}
                <span className="rating__votes">
                  {item.feedback ? `(${item.feedback.ratingCount})` : ''}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));

    return (
      <main className="catalog">
        <div className="container">
          <div className="catalog__row">
            {restaurantsList}
          </div>
        </div>
      </main>
    );
  }
};

export default Main;
