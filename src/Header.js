import React from 'react';

function Header() {
  return (
    <header>
      <section className="header_section">
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.svg`}
            alt="Uber Eats"
            className="logo"
          />
        </a>
        <div className="header_section--nav">
          <div className="destination_container big_show big_navigation">
            <button type="button">
              <img
                src={`${process.env.PUBLIC_URL}/img/location-bold.png`}
                alt=""
              />
              London
            </button>
            <button type="button">
              <img
                src={`${process.env.PUBLIC_URL}/img/time.png`}
                alt=""
              />
              Deliver Now
            </button>
          </div>

          <div className="header_btn-container">
            <a
              href="/"
              className="header_btn-search"
            >
              <img src={`${process.env.PUBLIC_URL}/img/shape.png`} alt=""/>
              Search
            </a>
            <a
              href="/"
              className="header_btn header_btn-sign_in"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
