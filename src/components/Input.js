import React, { useState, createRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import '../styles/Input.scss';

const Input = ({
  iconUrl, value, onChange, placeholder, name, className, type, isSmall, label,
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const inputRef = createRef();

  const inputWrapperClass = cx('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: className,
  });

  const inputClass = cx({
    'control__input--small': isSmall,
    'control__input--time': type === 'time',
  });

  return (
    // eslint-disable-next-line
    <label
      className="control"
    >
      {label && (
        <p className="control__label">
          {label}
        </p>
      )}
      <div className={inputWrapperClass}>
        {iconUrl && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}
        <input
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={inputClass}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  iconUrl: PropTypes.string,
  placeholder: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: '',
  label: '',
  className: '',
  iconUrl: '',
  placeholder: '',
  isSmall: true,
};

export default Input;
