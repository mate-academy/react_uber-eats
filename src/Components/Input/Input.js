import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export class Input extends React.PureComponent {
  state = {
    isFocused: false,
  }

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false })
  focus = () => this.inputRef.current.focus();
  
  render() {
    const {
      icon,
      value,
      placeholder,
      type,
      onChange,
      name,
    } = this.props;
    const {
      handleFocus,
      handleBlur,
      inputRef,
      focus
    } = this;
    const { isFocused } = this.state;
    const rootClassName = `control ${isFocused ? 'focus' : ''} ${type}`;

    return (
      <div
        className={rootClassName}
        onClick={focus}
        role="presentation"
      >
        {icon && (
          <img
            src={icon}
            className="control__icon"
            alt={placeholder}
          />
        )}

        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="control__input"
          placeholder={placeholder}
        />
      </div>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  icon: '',
  type: 'text',
};
