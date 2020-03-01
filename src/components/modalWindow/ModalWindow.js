import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { minus, plus } from '../../icons';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ModalWindow = ({ handleClose, togglerModal, uuidModal, allMenu }) => {
  const modalDish = allMenu.map(dish => dish.dishes)
    .flat().find(item => item.uuid === uuidModal);

  return (
    <div className="modal">
      <Dialog
        className="modal__dialog"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={togglerModal}
      >
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
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {modalDish ? modalDish.title : ''}
        </DialogTitle>
        <DialogContent>
          <p className="modal__text">
            {modalDish ? modalDish.description : ''}
          </p>
        </DialogContent>
        <DialogActions>
          <div className="modal__actions">

            <div className="modal__add">
              <div>
                {minus}
              </div>

              <div className="modal__count">
                1
              </div>

              <div>
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
              <span>Add 1 to order</span>
              <span>
                {modalDish ? modalDish.price / 10 : ''}
                {' '}
                UAH
              </span>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapState2props = state => ({
  uuidModal: state.uuidModal,
});

ModalWindow.propTypes = {
  handleClose: PropTypes.func.isRequired,
  togglerModal: PropTypes.bool.isRequired,
  uuidModal: PropTypes.string.isRequired,
  allMenu: PropTypes.arrayOf(PropTypes.object),
};

ModalWindow.defaultProps = {
  allMenu: [],
};

export default connect(mapState2props)(ModalWindow);
