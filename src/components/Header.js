import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.scss';

const Header = () => {
  const [initialLocation, setInitialLocation]
    = useState(localStorage.getItem('location') || 'London');

  const [location, setLocation] = useState(initialLocation);
  const [editing, setEditing] = useState({ location: false, search: false });

  const inputRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    if (editing.location) {
      inputRef.current.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClick = () => {
    setEditing({ ...editing, location: true });
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.location;

    if (value) {
      localStorage.setItem('location', value);

      setInitialLocation(localStorage.getItem('location'));
      setEditing({ ...editing, location: false });
    }
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setLocation(initialLocation);
      setEditing(false);
    }
  };

  return (
    <section className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img src="/images/Logo.svg" alt="Uber Eats" className="header-logo" />
        </Link>

        {
          editing.location
          && (
            <form
              action=""
              onSubmit={event => handleSubmit(event)}
              ref={inputRef}
              className="header__location-form"
            >
              <input
                type="text"
                name="location"
                value={location}
                onChange={event => handleChange(event)}
              />
              <button type="submit">submit</button>
            </form>
          )
        }

        {
          editing.location
          || (
            <div
              type="button"
              className="header__location-button"
              onClick={() => handleClick()}
              onKeyPress={() => handleClick()}
              role="button"
              tabIndex={0}
            >
              {location}
            </div>
          )
        }

        <button type="button">Deliver now</button>

        {
          editing.search
          && (
            <form
              action=""
              onSubmit={event => handleSubmit(event)}
              ref={inputRef}
            >
              <input
                type="text"
                name="search"
                value={location}
                onChange={event => handleChange(event)}
              />
              <button type="submit">submit</button>
            </form>
          )
        }
        {
          editing.search
          || <button type="button">search</button>
        }

        <button type="button">Sign in</button>
      </div>
    </section>
  );
};

export default Header;
