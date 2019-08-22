import React from 'react';

const MainSection = () => (
  <>
    <form class="main-section__search" method="GET">
      <label>
        <input class="main-section__search-field" type="text" placeholder="Search for restaurant or cuisine" />
      </label>
      <label>
        <input class="main-section__search--button visually-hidden " type="button" value="" />
      </label>
    </form>
    <form class="main-section__delivery" method="POST">
      <span class="header__delivery--text">When</span>
      <span class="header__delivery--text">to</span>
      <label>
        <select class="header__delivery--asap">
          <option>asap</option>
        </select>
      </label>
      <label>
        <input class="header__delivery--adress" type="text" placeholder="ul. Tarasivska St, 16" required="" />
      </label>
      <label>
        <input class="main-section__delivery--button visually-hidden " type="button" value="" />
      </label>
    </form>
    <h1 class="main-section__heading">London Restaurants</h1>
  </>
)

export default MainSection;
