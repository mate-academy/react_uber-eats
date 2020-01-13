import React, { useState, useCallback, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

const Input = ({
  iconUrl,
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), [setIsFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [setIsFocused]);
  const inputRef = createRef();
  const focus = () => inputRef.current.focus();
  const rootClass = cn(
    'control', {
      'control--focused': isFocused,
      [className]: !!className,
    }
  );

  return (
    <div
      role="presentation"
      className={rootClass}
      onClick={focus}
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
        className="control__input"
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  iconUrl: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: '',
  className: '',
  value: undefined,
};
export default Input;
