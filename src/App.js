/* eslint-disable max-len */
import React from 'react';
import './App.scss';

const BASE_URL = 'https://mate-academy.github.io/react_uber-eats/api';

const getData = async() => {
  const response = await fetch(
    `${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`
  );
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};

class App extends React.Component {
  state = {
    restourants: [],
    // isLoading: false,
  };

  about = [
    'About UberEats',
    'Read our blog',
    'Sign up to deliver',
    'Add your restaurant',
  ];

  getHelp = ['Get help', 'Read FAQs', 'View all cities', 'English'];

  async componentDidMount() {
    const restourants = await getData();

    this.setState({ restourants });
  }

  render() {
    const { restourants } = this.state;

    return (
      <div className="App">
        <header className="header">
          <div className="header__container">
            <a className="header__logo" href="/">
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
                alt="logo"
              />
            </a>

            <button type="button" className="header__location">
              London
            </button>

            <button type="button" className="header__delivery-time">
              Delivery now
            </button>

            <button type="button" className="header__search">
              Search
            </button>

            <a className="header__sign-in" href="/#">
              Sign in
            </a>
          </div>
        </header>
        <main className="main">
          <div className="main__container">
            <div>
              <ul className="main__restourants">
                {restourants.map(restor => (
                  <li key={restor.uuid}>
                    <section>
                      <img
                        className="main__restourants-photo"
                        src={restor.heroImageUrl}
                        alt={restor.slug}
                      />
                      <div className="main__restourants-info">
                        <div className="main__restourants-info-title">
                          {restor.title}
                        </div>
                        <ul className="main__restourants-info-categories">
                          {restor.categories.map(item => (
                            <li
                              className="main__restourants-info-categories-item"
                              key={item}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="main__restourants-info-opening">
                          {restor.closedMessage}
                        </div>
                      </div>
                    </section>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__container">
            <div className="footer__container-upper-part">
              <div className="footer__container-logo">
                <img
                  className="footer__container-logo-photo"
                  src="/images/logo-footer.svg"
                  alt="footer-logo"
                />
                <div className="footer__container-stores">
                  <a href="/#">
                    <img
                      className="footer__container-stores-apple"
                      src="/images/apple.svg"
                      alt="apple-store-link"
                    />
                  </a>
                  <a href="/#">
                    <img
                      className="footer__container-stores-google"
                      src="/images/google.png"
                      alt="google-store-link"
                    />
                  </a>
                </div>
              </div>

              <div className="footer__container-about">
                <ul className="footer__container-about-list">
                  {this.about.map(item => (
                    <li className="footer__container-about-item" key={item}>
                      <span className="footer__container-about-item-text">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer__container-get-help">
                <ul className="footer__container-get-help-list">
                  {this.getHelp.map(item => (
                    <li
                      className="footer__container-get-help-item"
                      key={item}
                    >
                      <span className="footer__container-get-help-item-text">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr className="footer__container-line" />
            <div className="footer__container-lower-part">
              <div className="footer__container-lower-part-text">
                <div className="footer__container-inc">
                  <p>© 2019 Uber Technologies Inc.</p>
                </div>
                <div className="footer__container-rights">
                  <div className="footer__container-rights-upper">
                    <p>Privacy policy</p>
                    <p>Terms of use</p>
                    <p>Pricing</p>
                  </div>
                  <div className="footer__container-rights-lower">
                    <div className="footer__container-rights-social-links">
                      <a href="/#">
                        <img
                          className="footer__container-rights-social-links-f"
                          src="/images/f.svg"
                          alt="facebook-link"
                        />
                      </a>
                      <a href="/#">
                        <img
                          className="footer__container-rights-social-links-t"
                          src="/images/t.svg"
                          alt="twitter-link"
                        />
                      </a>
                      <a href="/#">
                        <img
                          className="footer__container-rights-social-links-i"
                          src="/images/i.svg"
                          alt="instagram-link"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
