import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './ModalWindow.scss';
import { Loader } from '../Loader';

export class ModalWindow extends React.Component {
  rootEl = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.rootEl);
  }

  componentWillUnmount() {
    document.body.removeChild(this.rootEl);
  }

  render() {
    const {
      closeModalWindow,
      isLoading,
    } = this.props;

    return ReactDom.createPortal(
      <div className="modal-window">
        <div className="modal-window__inner-container">
          {
            isLoading && (
              <Loader />
            )
          }
          <button
            type="button"
            className="modal-window__close-btn"
            onClick={closeModalWindow}
          >
            <img
              src="./images/close-btn.svg"
              alt="close button"
              className="modal-window__close-btn-img"
            />
          </button>
          {this.props.children}
        </div>
      </div>, this.rootEl
    );
  }
}

ModalWindow.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.shape({}),
};

ModalWindow.defaultProps = {
  children: {},
};
