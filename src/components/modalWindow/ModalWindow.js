import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { minus, plus } from '../../icons';
import {
  addDishInModal,
  defaultCountDish,
  minusDishInModal,
} from '../../store/actions';

const ModalWindow = (
  { handleClose,
    togglerModal,
    uuidModal,
    allMenu,
    addDish,
    minusDish,
    countDishInModal }
) => {
  const modalDish = allMenu.map(dish => dish.dishes)
    .flat().find(item => item.uuid === uuidModal);

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (togglerModal) {
      const { current: descriptionElement } = descriptionElementRef;

      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [togglerModal]);

  return (
    <div>
      <Dialog
        open={togglerModal}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <CloseIcon
          className="close"
          onClick={handleClose}
        />
        <DialogTitle id="scroll-dialog-title">
          {modalDish ? modalDish.title : ''}
        </DialogTitle>
        {/* eslint-disable-next-line no-restricted-globals */}
        <DialogContent dividers={scroll === 'paper'}>
          <div
            className="modal__img"
            style={modalDish ? {
              backgroundImage: `url(${modalDish.imageUrl !== null
              && modalDish.imageUrl !== ''
                ? `${modalDish.imageUrl}`
                // eslint-disable-next-line max-len
                : `https://thecustompackagingboxes.com/wp-content/uploads/2014/09/Chinese_food_boxes_3-compressed.jpg`})`,
            } : ''
            }
          />
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {modalDish ? modalDish.description : ''}

          </DialogContentText>
          <span className="cost">
            Price:
            {' '}
            {modalDish ? (modalDish.price / 10 * countDishInModal)
              .toFixed(2) : ''}
            {' '}
            UAH
          </span>
        </DialogContent>
        <DialogActions>
          <div className="modal__add">

            <div
              onKeyDown={minusDish}
              role="button"
              tabIndex={0}
              onClick={minusDish}
            >
              {minus}
            </div>

            <div className="modal__count">
              {countDishInModal}
            </div>

            <div
              role="button"
              tabIndex={0}
              onKeyDown={addDish}
              onClick={addDish}
            >
              {plus}
            </div>
          </div>

          <div
            role="button"
            tabIndex={0}
            onKeyDown={handleClose}
            className="modal__add-basket"
            onClick={handleClose}
          >
            <span>
              Add
              <span className="oder">
                {countDishInModal}
                {' '}
                to order
              </span>
            </span>
            <span>
              {modalDish ? (modalDish.price / 10 * countDishInModal)
                .toFixed(2) : ''}
              {' '}
              UAH
            </span>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapState2props = state => ({
  uuidModal: state.uuidModal,
  countDishInModal: state.countDishInModal,
});

const mapDispatch2Props = ({
  addDish: addDishInModal,
  minusDish: minusDishInModal,
  setDefaultCount: defaultCountDish,
});

ModalWindow.propTypes = {
  handleClose: PropTypes.func.isRequired,
  togglerModal: PropTypes.bool.isRequired,
  uuidModal: PropTypes.string.isRequired,
  allMenu: PropTypes.arrayOf(PropTypes.object),
  addDish: PropTypes.func,
  minusDish: PropTypes.func,
  countDishInModal: PropTypes.func,
};

ModalWindow.defaultProps = {
  allMenu: [],
  addDish: '',
  minusDish: '',
  countDishInModal: '',
};

export default connect(mapState2props, mapDispatch2Props)(ModalWindow);
