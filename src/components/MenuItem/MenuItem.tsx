import React, { useEffect, useRef } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { IRestaurant, addPrice, basket, Customization } from '../../types'
import './MenuItem.scss';
import Loader from '../Loader/Loader';
import { historyReplacer } from '../../helpers';
import { ConnectedProps } from 'react-redux';
import { connector } from '../MenuItem';

const MenuItem = (
  {menuItem,
  loadMenuItem,
  isEditable,
  setIsEditable,
  isLoading,
  restaurant,
  setCustomPrice,
  increaseCounter,
  decreaseCounter,
  fullPrice,
  hasError,
  counter,
  setHasWarning,
  hasWarning,
  setaddPrice,
  setCounter,
  removeItem,
  basketItemId,
  addItemToBasket,
  editItemInBasket,
  customInfo,
  basket,
  resetaddPrice,
}: ConnectedProps<typeof connector>) => {
  const match = useRouteMatch<{ itemUuid: string }>();
  const history = useHistory();
  const modalRef = useRef<HTMLHeadingElement>(null!);
  const radioRef = useRef<any>(null!);

  const addToBasket = (
    hasWarning: boolean,
    uuid: string,
    title: string,
    restaurant: IRestaurant,
    counter: number,
    price: number,
    basket: basket[],
   ) => {
    if(basket[0] && !basket[0].restaurantTitle.includes(restaurant.title)){
      setHasWarning(true);
    }
    if((basket[0] && basket[0].restaurantTitle === restaurant.title)
        || basket.length === 0
        || hasWarning
      ){
      addItemToBasket(
        hasWarning,
        uuid,
        title,
        restaurant,
        counter,
        price,
        customInfo,
        basket);
      history.replace(historyReplacer(history));
    }
  };

  const editItem = (
    uuid: string,
    title: string,
    restaurant: IRestaurant,
    counter: number,
    price: number
    ) => {
    resetaddPrice();
    editItemInBasket(uuid, title, restaurant, counter, price, customInfo);
    history.replace(historyReplacer(history));
  };

  const removeFromBasket = (basketItemId: number) => {
    removeItem(basketItemId);
    history.replace(historyReplacer(history));
  };

  useEffect(()=>{
    loadMenuItem(match.params.itemUuid);
    if(isEditable) {
      setCounter(basket && basket
        .find(elem => elem.itemUuid === menuItem.uuid)!.count
      );
      setaddPrice(basket && basket
        .find(elem => elem.id === basketItemId)!.customInfo
      );
    };

    document.body.style.overflow = 'hidden';

    return () =>{
      document.body.style.overflow = 'auto';
      setaddPrice([]);
      setCounter(1);
      setIsEditable(false);
    };
    },[loadMenuItem, match]
  );

  if (isLoading) {
    return (<Loader />);
  };

  if (hasError) {
    return (
      <div
        className='popup'
        onClick={
          (event: React.MouseEvent) =>(
          modalRef.current
          && !modalRef.current.contains(event.target as Node)
          && history.replace(historyReplacer(history))
          )}
        >
        <div
          className='error-message'
          ref={modalRef}
        >
        <span>An error is occured</span>
        <button
          className='error-message--button'
          onClick={() => history.replace(historyReplacer(history))}
        >
          Go back
          </button>
        </div>
      </div>
    )
  };

  if (hasWarning) {
    return (
      <div
        className='popup'
        onClick={
          (event: React.MouseEvent) =>(
          modalRef.current
          && !modalRef.current.contains(event.target as Node)
          && history.replace(historyReplacer(history))
          )}
      >
        <div
          className='error-message'
          ref={modalRef}
        >
    <span>
      Your order contains items from
      <span className='error-message--name'> {basket[0].restaurantTitle}</span>
    </span>
    <span>
      Create a new order to add items from
      <span className='error-message--name'> {restaurant.title}</span>
    </span>
          <button
            className='error-message--button'
            onClick={() => addToBasket(
              hasWarning,
              menuItem.uuid,
              menuItem.title,
              restaurant,
              counter,
              fullPrice,
              basket)}
            >
            create new order
          </button>
      </div>
    </div>
    )
  };

  return (
    menuItem &&
    <div className='popup'
      onClick={
        (event: React.MouseEvent) =>(
        modalRef.current
        && !modalRef.current.contains(event.target as Node)
        && history.replace(historyReplacer(history))
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
            src="./images/close.svg"
            alt="close button"
            onClick={()=> history.replace(historyReplacer(history))}
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
          { menuItem.customizationsList && menuItem.customizationsList.map((sublist: Customization, i: number) =>(
          <React.Fragment key={sublist.title + i}>
          <div className="customization-block__title">
            <div className="customization-block__title--title">
              {sublist.title.split('-')[0]}
            </div>
            <div className="customization-block__title--permission">
              Choose up to {sublist.maxPermitted}
              </div>
          </div>
          {sublist.maxPermitted === 1 &&
          <form className="customization-block__items">
            {sublist.options.map((option, i) => (
              <div
                key={option.title + i}
                className="customization-block__items--item">
                <label className="customization-block__items--lable">
                  <input
                    type="radio"
                    ref={radioRef}
                    name={sublist.title}
                    value={option.price}
                    className="radio--default"
                    defaultChecked={
                      isEditable && basket.some(elem => (
                        elem.customInfo.some((customItem: addPrice) => (
                          customItem.customItem === option.title
                        &&
                          elem.id === basketItemId))
                        )
                      )
                    }
                    onChange={() =>
                        setCustomPrice(
                          option.price,
                          sublist.title,
                          'radio',
                          option.title,
                          option.uuid,
                        )}
                  />
                  <div className="customization-block__items--name-price">
                    <span className="text-radio">
                      {option.title.split('-')[0]}
                    </span>
                    <span className="customization-block__items--price">
                      +{restaurant.priceBucket[0]}
                      {option.price}
                    </span>
                  </div>
                </label>
              </div>
            ))}
          </form>}
          {sublist.maxPermitted > 1 &&
          <form className="customization-block__items">
            {sublist.options.map((option, i) => (
              <div
                key={option.title.split('-')[0] + i}
                className="customization-block__items--item"
              >
                <label className="customization-block__items--lable">
                  <input
                    type="checkbox"
                    className="checkbox--default"
                    name={sublist.title}
                    value={option.price}
                    defaultChecked={
                      isEditable && basket.some(elem => (
                        elem.customInfo.some((customItem: addPrice) => (
                          customItem.customItem === option.title
                          &&
                          elem.id === basketItemId))
                        )
                      )
                    }
                    onChange={() => setCustomPrice(
                      option.price,
                      sublist.title,
                      'checkbox',
                      option.title,
                      option.uuid,
                    )}
                  />
                  <div className="customization-block__items--name-price">
                    <span className="text-checkbox">
                      {option.title.split('-')[0]}
                    </span>
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
        {isEditable && (
          <div
          className="menu-item__delete-item"
          onClick={() => removeFromBasket(basketItemId)}
          >
            Remove item
          </div>
        )}
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
          {
            isEditable
          ? <div
          className="submit-block__submit"
          onClick={() => editItem(
            menuItem.uuid,
            menuItem.title,
            restaurant,
            counter,
            fullPrice)}
        >
          <span className="submit-block__submit--count">
            Add {counter} to order
          </span>
          <span className="submit-block__submit--price">
            {(fullPrice * counter).toFixed(2)} UAH
          </span>
        </div>
          : <div
              className="submit-block__submit"
              onClick={() => addToBasket(
                hasWarning,
                menuItem.uuid,
                menuItem.title,
                restaurant,
                counter,
                fullPrice,
                basket)}
            >
              <span className="submit-block__submit--count">
                Add {counter} to order
              </span>
              <span className="submit-block__submit--price">
                {(fullPrice * counter).toFixed(2)} UAH
              </span>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
  )
};

export default MenuItem;
