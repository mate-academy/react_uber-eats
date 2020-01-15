import React, { useState, createRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  iconUrl,
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
  isSmall,
  label,
}) => {
  const [isFocused, setFocused] = useState(false);

  const inputRef = createRef();

  const inputWrapperClass = cx('control__input-wrapper', {
    'control__input-wrapperfocused': isFocused,
    [className]: !!className,
  });

  const inputClass = cx('control__input', {
    'control__input--small': isSmall,
    'control__input--time': type === 'time',
  });

  return (
    // eslint-disable-next-line
    <label className="control">
      {label && (
        <p className="control__label">
          {label}
        </p>
      )}
      <div
        className={inputWrapperClass}
      >
        {!!iconUrl
          && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
            />
          )}
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          name={name}
          placeholder={placeholder}
          className={inputClass}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  isSmall: true,
  label: '',
};

export default Input;
