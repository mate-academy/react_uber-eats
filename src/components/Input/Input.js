import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

export const Input = (props) => {
  const {
    iconUrl,
    value,
    onChange,
    type,
    placeholder,
    name,
    className,
  } = props;

  const inputRef = createRef();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const focus = () => inputRef.current.focus();

  const rootClass = cx('control', {
    'control--focused': isFocused,
    [className]: !!className,
  });

  return (
    <div
      className={rootClass}
      onClick={focus}
      role="presentation"
    >
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        placeholder={placeholder}
        className="control__input"
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};
