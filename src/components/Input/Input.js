import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

const Input = (props) => {
  const [isFocused, setFocused] = useState(false);

  const {
    iconUrl,
    placeholder,
    type,
    onChange,
    value,
    name,
    className,
  } = props;

  const rootClass = cx(`control`, {
    'control--focused': isFocused,
    [className]: !!className,
  });

  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={rootClass}
      role="presentation"
      onClick={focus}
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
        vlaue={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        name={name}
        placeholder={placeholder}
        className="control__input"
      />
    </div>
  );
};

Input.propTypes = {
  iconUrl: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  iconUrl: '',
  placeholder: '',
  type: 'input',
  className: '',
};

export default Input;
