import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
  }

  handleBlur= () => {
    this.setState({
      isFocused: false,
    });
  }

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
      isSmall,
      label,
    } = this.props;

    const { isFocused } = this.state;

    const inputWrapperClass = cx('control__input-wrapper', {
      'control__input-wrapper--focused': isFocused,
      [className]: !!className,
    });

    const inputClass = cx('control__input', {
      'control__input--small': isSmall,
      'control__input--time': type === 'time',
    });

    return (
      <label
        className="control"
      >
        {label && (
          <p className="control__label">
            {label}
          </p>
        )}
        <div className={inputWrapperClass}>
          {!!iconUrl && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
              placeholder={placeholder}
            />
          )}
          <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            className={inputClass}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  iconUrl: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
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
