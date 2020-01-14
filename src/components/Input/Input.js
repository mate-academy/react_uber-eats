import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Input = ({
  iconUrl,
  name,
  value,
  className,
  onChange,
  type,
  placeholder,
}) => {
  const [isFocused, handleFocuses] = useState(false);

  const handleFocus = () => handleFocuses(true);

  const handleBlur = () => handleFocuses(false);

  const focus = () => inputRef.current.focus();

  const inputRef = createRef();

  return (
    <div
      className={cn('control', {
        'control--focused': isFocused,
        [className]: !!className,
      })}
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
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="contor__input"
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  className: '',
  placeholder: '',
};

export default Input;
