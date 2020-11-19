import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: fade(theme.palette.background.paper, 0.95),
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const TransitionsModal = ({ buttonText, color }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h3
        className="button"
        style={{ color: color }}
        onClick={() => handleOpen()}
      >
        {buttonText}
      </h3>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">I would like to hear from you</h2>
            <p
              id="transition-modal-description"
              style={{ textAlign: 'center' }}
            >
              drop your message on{' '}
              <div style={{ color: '#1aa6e2' }}>aayush.code4580@gmail.com</div>
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
