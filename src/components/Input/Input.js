import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './input.scss';

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
  const [isFocused, setFocus] = useState(false);

  const inputWrapper = cx('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: !!className,
  });

  const inputClass = cx('control__input', {
    'control__input--small': isSmall,
    'control-input--time': type === 'time',
  });

  const inputRef = useRef(null);

  const handelFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    // eslint-disable-next-line
    <label className="control">
      {label && (
        <p className="control__Label">
          {label}
        </p>
      )}
      <div className={inputWrapper}>
        {!!iconUrl && (
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
          onFocus={handelFocus}
          onBlur={handleBlur}
          name={name}
          className={inputClass}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  iconUrl: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  isSmall: PropTypes.bool,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  label: '',
  isSmall: true,
};

export default Input;
