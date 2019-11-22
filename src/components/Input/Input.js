import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

export class Input extends PureComponent {

  state = {
    isFocused: false,
  }

  inputRef = createRef();

  handleFocus = () => {
    this.setState({
      isFocused: true,
    })
  }

  handleBlur = () => {
    this.setState({
      isFocused: false,
    })
  }

  focus = () => {
    this.inputRef.current.focus()
  }

  render() {
    const {
      iconURL,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
      isSmall,
      label
     } = this.props;

    const { isFocused } = this.state;

    const inputWrapperClass = cn('control__input-wrapper', {
      'control__input-wrapper--focused': isFocused,
      [className]: !!className,
    });

    const inputClass = cn('control__input', {
      'control__input--small': isSmall,
      'control__input--time': type === 'time',
    });

    return (
      <label className="control" >
        {label && (<p className="control__label">{label}</p>)}
        <div className={inputWrapperClass}>
          {!!iconURL && (
          <img
            src={iconURL}
            alt={placeholder}
            className="control__icon"
          />)}
          <input
            ref={this.inputRef}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            className={inputClass}
          />
        </div>
      </label>
    );
  }

}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  iconURL: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  iconURL: '',
  placeholder: '',
  className: '',
  isSmall: true,
};
