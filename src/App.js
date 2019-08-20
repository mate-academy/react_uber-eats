import React from 'react';
import './App.scss';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';
const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

const loadData = async() => {
  const response = await fetch(
    `${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`
  );
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};

class App extends React.Component {
  state = {
    stores: [],
  }

  async componentDidMount() {
    const stores = await loadData();

    this.setState({ stores });
  }

  checkRaitingInfo = (store) => {
    if (store.feedback) {
      if (store.feedback.rating) {
        return store.feedback.rating;
      }

      return false;
    }

    return false;
  }

  checkRaitingCountInfo = (store) => {
    if (store.feedback) {
      if (store.feedback.ratingCount) {
        return store.feedback.ratingCount;
      }

      return false;
    }

    return false;
  }

  render() {
    const { stores } = this.state;

    return (
      <div className="App">
        <header className="header">
          <div className="container header__container">
            <a href="/">
              <img
                alt="UberEats logo"
                src={`${IMG_URL}/f8f0721f871b3704cce92eb96bc6e504.svg`}
              />
            </a>
            <button
              type="button"
              className="header__button-location"
            >
              London
            </button>
            <button
              type="button"
              className="header__button-delivery-time"
            >
              Deliver now
            </button>
            <button
              type="button"
              className="header__button-search"
            >
              Search
            </button>
            <a
              href="#$"
              className="header__sign-in"
            >
              Sign in
            </a>
          </div>
        </header>
        <main>
          <div className="container main__container">
            {stores.map(store => (
              <a
                className="main__store"
                href="#$%"
              >
                <img
                  alt={store.slug}
                  src={store.heroImageUrl}
                  className="main__store-image"
                />
                <div className="main__store-info">
                  <div className="main__store-info-title">
                    {store.title}
                  </div>
                  <div className="main__store-info-categories">
                    {store.categories.map(
                      category => <li className="main__category">{category}</li>
                    )}
                  </div>
                  <div className="main__store-info-details">
                    <div className="main__store-info-details-open">
                      {store.closedMessage}
                    </div>
                    <div className="main__store-info-details-rating">
                      <div>{this.checkRaitingInfo(store)}</div>
                      <div>
                        <img
                          className="main__store-info-details-rating-star"
                          alt="star"
                          /* eslint-disable-next-line */
                          src={`${IMG_URL}/972e1cb487b3a5c72c30a6635596f477.svg`}
                        />
                      </div>
                      <div>{this.checkRaitingCountInfo(store)}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
