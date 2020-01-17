import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classname';
import './input.scss';

const Input = ({ iconUrl, value, onChange, type, placeholder, className }) => {
  const [isFocused, changeIsFocused] = useState(false);

  const inputRef = createRef();
  const focus = () => inputRef.current.focus();

  return (
    <div
      role="presentation"
      onClick={focus}
      className={cx('control', {
        'control--focused': isFocused,
        [className]: !!className,
      })}
    >
      {!!iconUrl && (
        <img src={iconUrl} alt={placeholder} className="control__icon" />)}

      <input
        ref={inputRef}
        className="control__input"
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => changeIsFocused(true)}
        onBlur={() => changeIsFocused(false)}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;
