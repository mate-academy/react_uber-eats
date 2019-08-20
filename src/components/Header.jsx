import React from 'react';
import Search from './Search'

const Header = () => (
  <div className="header">
    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg" class="bs"></img>
    <button className="header_location header_items-position">
    <svg className="header_button-icon" width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z" fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F"></path></svg>
      London
    </button>
    <button className="header_time-delovery header_items-position">
    <svg className="header_button-icon" width="24px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2.83325 12.0007c0-5.08338 4.08334-9.16672 9.16665-9.16672 5.0834 0 9.1667 4.08334 9.1667 9.16672 0 5.0833-4.0833 9.1666-9.1667 9.1666-5.08331 0-9.16665-4.0833-9.16665-9.1666zm2.5 0c0 3.6666 3 6.6666 6.66665 6.6666 3.6667 0 6.6667-3 6.6667-6.6666 0-3.66672-3-6.66672-6.6667-6.66672-3.66665 0-6.66665 3-6.66665 6.66672zm5.41665 2.0833v-6.25002h2.5v3.75002h2.9167v2.5z" fill="#1F1F1F" fill-rule="evenodd"></path></svg>
      Delivery now
    </button>
    <Search />
    <a href="#" className="header_sign-in  header_items-position">Sign in</a>
  </div>
)

export default Header;
