import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-container-align">

          <a className="header-container__logo" href="#">
            <img src="./images/Logo.png" alt="Uber eats"/>
          </a>

          <form className="delivery">

            <div className="delivery__location">
              <label>
                  <input
                    className="delivery__input"
                    type="search"
                    defaultValue="London"
                    placeholder="Enter delivery adress"
                  />
              </label>
            </div>

            <div>
              <select className="delivery__time" name="delivery-time" aria-label="select time">
                <option value="">Deliver now</option>
                <option value="">Deliver at time</option>
              </select>
            </div>

          </form>
        </div>

        <div className="header-container-align">

          <form action="" method="post">
            <input
              type="search"
              name="search-field"
              placeholder="Search"
              className="header-container__search"
            />
          </form>

          <button className="header-container__singIn">
            Sign in
          </button>

        </div>

      </div>

    </header>
  )
}

export default Header;
