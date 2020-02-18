/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import cn from 'classnames';
import './Input.scss';
import { IInput } from '../../types';

const Input = ({
  iconUrl,
  value,
  onChange,
  type,
  placeholder,
  name,
  isSmall,
  label,
  locationList,
  setLocation,
}: IInput) => {



  const wrapperClass = cn(
    'control__wrapper', {
      'address': name === 'address',
    }
  );
  const inputClass = cn(
    'control__input', {
      'control__input--small': isSmall,
    }
  );

  return (
    <>
      {name === "address" &&
        <label
        className="control"
        >
        {label && (
          <p className="control__label">
            {label}
          </p>
        )}
        <div className={wrapperClass}>
          {!!iconUrl && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
            />
          )}
          <select
            onChange={(e)=> setLocation(e.target.value)}
            value={value}
            name={name}
            className={inputClass}
            placeholder={placeholder}
          >
            {locationList && locationList.locations.map(elem => (
              <option
              key={elem}
              value={locationList.locationsMap[elem].id}
              >
                {locationList.locationsMap[elem].title}
              </option>
            ))}
          </select>
        </div>
      </label>
    }
    {name !== "address" &&
      <label
        className="control"
      >
        {label && (
          <p className="control__label">
            {label}
          </p>
        )}
        <div className={wrapperClass}>
          {!!iconUrl && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
            />
          )}
          <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            className={inputClass}
            placeholder={placeholder}
          />
        </div>
      </label>
    }
    </>
  );
};

export default Input;
