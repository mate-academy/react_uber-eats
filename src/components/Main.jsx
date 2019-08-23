import React from 'react';
import Loader from 'react-loader-spinner';

const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api'
const RESTAURANTS_URL = '/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json';

const getRestaurants = async () => {
  const respons = await fetch(`${BASE_URL}${RESTAURANTS_URL}`);
  const result = await respons.json();

  console.log(result);

  return result.data.feedItems.map(item => {
    return result.data.storesMap[item.uuid]
  });
}


class Main extends React.Component {
  state = {
    restaurants: [],
    isLoading: true,
  }

  async componentDidMount() {
    const restaurants = await getRestaurants();

    this.setState({
      restaurants,
      isLoading: false,
    });
  }

  render() {

    const { restaurants, isLoading } = this.state;

    return (
      <main className="main">

        {isLoading && (
          <Loader
            type="Oval"
            color="green"
            height="50"
            width="50"
            className="loader"
          />
        )}

      <section className="main-container">

        <section className="restaurants-list">

          {restaurants.map(restaurant => (
              <div className="restaurant-card">
                <div className="restaurant-card__img">
                <a href="#/">
                  <img src={restaurant.heroImageUrl} alt="Restaurant"/>
                </a>
                </div>

                <div className="restaurant-card__info">
                  <div className="restaurant-card__name">{restaurant.title}</div>
                  <div className="restaurant-card__kitchen-name">{restaurant.categories.join(' • ')}</div>
                  <span className="restaurant-card__distance">{restaurant.etaRange ? restaurant.etaRange.text : '15-20 min'}</span>
                  <span className="">{restaurant.feedback ? restaurant.feedback.rating : '00'}</span>
                </div>
              </div>
          ))}

        </section>

      </section>

    </main>

    )
  }
}

export default Main;
