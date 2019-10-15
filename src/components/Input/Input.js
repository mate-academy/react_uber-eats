import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  }

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focus = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
    } = this.props;
    const { isFocused } = this.state;

    const rootClass = cx('control', {
      'control--focused': isFocused,
      [className]: !!className,
    });

    return (
      <div
        className={rootClass}
        onClick={this.focus}
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
          ref={this.inputRef}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          name={name}
          placeholder={placeholder}
          className="control__input"
        />
      </div>
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
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
};
