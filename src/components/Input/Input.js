/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

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
      isSmallPhone,
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
      'control__input--small-phone': isSmallPhone,
    });

    return (
      <label className="control">
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
            />
          )}

          <input
            type={type}
            value={value}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            name={name}
            className={inputClass}
            placeholder={placeholder}
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  isSmallPhone: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  isSmall: true,
  isSmallPhone: true,
  label: '',
};
