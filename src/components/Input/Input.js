import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

export const Input = ({
  name,
  type,
  value,
  placeholder,
  iconUrl,
  onChange,
  className,
}) => {
  const [isFocused, setFocus] = useState(false);

  const inputRef = createRef();

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const focus = () => inputRef.current.focus();

  return (
    <div
      className={cn(
        'control',
        {
          'control--focused': isFocused,
          [className]: !!className,
        }
      )}
      onClick={focus}
      role="presentation"
    >
      {!!iconUrl && (
        <img
          className="control__icon"
          src={iconUrl}
          alt={placeholder}
        />
      )}

      <input
        ref={inputRef}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="control__input"
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
