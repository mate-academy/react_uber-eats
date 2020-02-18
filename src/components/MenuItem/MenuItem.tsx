import React, { useEffect, useRef } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { IMenuItem } from '../../types'
import './MenuItem.scss';
import Loader from '../Loader/Loader';

const MenuItem = (
  {menuItem,
  loadMenuItem,
  isLoading,
  restaurant,
  getCustomPrice,
  increaseCounter,
  decreaseCounter,
  fullPrice,
  hasError,
  counter,
}: IMenuItem) => {

  const match = useRouteMatch<{ itemUuid: string }>();
  const history = useHistory();
  const modalRef = useRef<HTMLHeadingElement>(null!);
  const radioRef = useRef(null!);

  useEffect(()=>{
    loadMenuItem(match.params.itemUuid);
    document.body.style.overflow = 'hidden';

    return () =>{ document.body.style.overflow = 'auto' };

    },[loadMenuItem, match]
  );
  if (isLoading) {
    return (<Loader />);
  }
  if (hasError) {
    return (
      <div className='popup'>
        <div className='error-message'>
        <span>An error is occured</span>
        <button
          className="error-message--button"
          onClick={history.goBack}
        >
          Go back
          </button>
        </div>
      </div>
    )
  }
  return (
    menuItem &&
    <div className='popup'
      onClick={
        (event: any) =>(
        modalRef.current
        && !modalRef.current.contains(event.target)
        && history.goBack()
        )}>
      <div
        className='form'
        ref={modalRef}
      >
        <div className="menu-item">
        <div className="menu-item__top-block">
          {
          menuItem.imageUrl && <img
            className="menu-item__photo"
            src={menuItem.imageUrl}
            alt='menu item'
          />
          }
          <img
            src="./images/close-button.svg"
            alt="close button"
            onClick={history.goBack}
            className="menu-item__close"
          />
        </div>
        <div className="menu-item__title-block">
          <h1 className="title-block__title">
            {menuItem.title}
          </h1>
          <p className="title-block__description">
            {menuItem.itemDescription}
          </p>
        </div>
        <div className="menu-item__customization-block">
          {menuItem.customizationsList.map((sublist) =>(
          <React.Fragment key={sublist.title}>
          <div className="customization-block__title">
            <div className="customization-block__title--title">
              {sublist.title}
            </div>
            <div className="customization-block__title--permission">
              Choose up to {sublist.maxPermitted}
              </div>
          </div>
          {sublist.maxPermitted === 1 &&
          <form className="customization-block__items">
            {sublist.options.map((option: any) => (
              <div
                key={option.title}
                className="customization-block__items--item">
                <label className="customization-block__items--lable">
                  <input
                    type="radio"
                    ref={radioRef}
                    name={sublist.title}
                    value={option.price}
                    className="radio--default"
                    onChange={() =>
                        getCustomPrice(
                          option.price,
                          sublist.title,
                          'radio',
                          option.title
                        )}
                  />
                  <div className="customization-block__items--name-price">
                    <span className="text-radio">{option.title}</span>
                    <span className="customization-block__items--price">
                      +{restaurant.priceBucket}
                      {option.price}
                    </span>
                  </div>
                </label>
              </div>
            ))}
          </form>}
          {sublist.maxPermitted > 1 &&
          <form className="customization-block__items">
            {sublist.options.map((option: any) => (
              <div
                key={option.title}
                className="customization-block__items--item"
              >
                <label className="customization-block__items--lable">
                  <input
                    type="checkbox"
                    className="checkbox--default"
                    name={sublist.title}
                    value={option.price}
                    onChange={() => getCustomPrice(
                      option.price,
                      sublist.title,
                      'checkbox',
                      option.title
                    )}
                  />
                  <div className="customization-block__items--name-price">
                    <span className="text-checkbox">{option.title}</span>
                    <span className="customization-block__items--price">
                      +{restaurant.priceBucket}
                      {option.price}
                    </span>
                  </div>
                </label>
              </div>
          ))}
          </form>}
          </React.Fragment>
        ))}
        </div>
        <div className="menu-item__submit-block">
          <div className="submit-block__quantity">
            <span className="submit-block__quantity--tag">Кiлькiсть:</span>
            <div className="submit-block__quantity--buttons">
              <img
                className="submit-block__quantity--buttons--plus"
                src='./images/Group 18.svg'
                alt="add item button"
                onClick={() => decreaseCounter()}
              />
              <div
                className="submit-block__quantity--buttons--counter"
              >
                {counter}
              </div>
              <img
                className="submit-block__quantity--buttons--minus"
                src='./images/Group 20.svg'
                alt="remove item button"

                onClick={() => increaseCounter()}
              />
            </div>
          </div>
          <div className="submit-block__submit">
            <span className="submit-block__submit--count">
              Add {counter} to order
            </span>
            <span className="submit-block__submit--price">
              {fullPrice.toFixed(2)} UAH
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default MenuItem;
