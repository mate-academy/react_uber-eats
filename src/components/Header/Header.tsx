import React, { useEffect } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './Header.scss';
import { Input } from '../Input/';
import { IHeader, Handler } from '../../types';
import { debounceWrapper } from '../../helpers';
import { Basket } from '../Basket/';

const Header = ({
  setTime,
  setSearch,
  toggleSearch,
  toggleDelivery,
  isSearchVisible,
  isDeliveryVisible,
  showBasket,
  isBasketShown,
  closeMobile,
  locationId,
  basket,
  totalCount,
}: IHeader) => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(()=>{
    history.push('/restaurants'+ location.search)
  },[locationId, history])

  const handleChange: Handler = (value, name) => {
    switch (name) {
      case 'time': return setTime(value);
      case 'search': {
        setSearch(value);
        params.set('title', value.trim().toLowerCase());
        !value.trim() && params.delete('title');
        history.push({ search: `${params.toString()}` });
        break;
      }
      default: return undefined;
    }
  };


  const debouncedHandleChange = debounceWrapper(handleChange, 1000);

  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <img
            onClick={() => history.push('/restaurants')}
            src="./images/logo.svg"
            alt="Uber Eats"
            className="header__logo"
          />
          <div className="header__delivery-info">
            <Input
              name="address"
              placeholder="address"
              iconUrl="./images/place.svg"
            />
            <Input
              name="time"
              onChange={e => debouncedHandleChange(e.target.value, 'time')}
              placeholder="Time"
              className="header__time"
              type="time"
            />
          </div>
          <div className="header__search">
            <Input
              name="search"
              onChange={e => debouncedHandleChange(e.target.value, 'search')}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>
          <div className="header__toggle-buttons">
            <button
              onClick={toggleDelivery}
              className="header__toggle-btn"
              type="button"
            >
              <img
                src="./images/place.svg"
                alt="place icon"
              />
            </button>
            <button
              onClick={toggleSearch}
              className="header__toggle-btn"
              type="button"
            >
              <img
                src="./images/search.svg"
                alt="search icon"
              />
            </button>
          </div>
          { basket.length === 0
          ?(
            <a
              className="header__link"
              href="/"
            >
            Sign in
            </a>
          ):(
            <>
              <img
                src='./images/basket.svg'
                className="header__link"
                alt='basket'
                onClick={() => showBasket()}
              />
               <span className="header__total-count">{totalCount}</span>
            </>
          )
        }
        {isBasketShown && (
          <Basket />
        )}
        </div>
        {(isSearchVisible || isDeliveryVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isSearchVisible && (
              <Input
                label="search"
                name="search"
                onChange={e => debouncedHandleChange(e.target.value, 'search')}
                placeholder="Search"
                iconUrl="./images/search.svg"
                isSmall={false}
              />
            )}
            {isDeliveryVisible && (
            <>
              <Input
                label="where"
                name="address"
                placeholder="address"
                iconUrl="./images/place.svg"
                isSmall={false}

              />
              <Input
                label="to"
                name="time"
                onChange={e => debouncedHandleChange(e.target.value, 'time')}
                placeholder="Time"
                className="header__time"
                type="time"
                isSmall={false}
              />
            </>
            )}
            <button
              onClick={closeMobile}
              className="mobile-controls__close"
              type="button"
            >
              <img
                src="./images/mdi_close.svg"
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
