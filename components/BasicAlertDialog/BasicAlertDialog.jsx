import { forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { Button } from '..';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BasicAlertDialog = ({ toggleShowAlert, title, buttonText }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            padding: '20px',
          },
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogActions>
        <Button onClick={toggleShowAlert} header={buttonText} />
      </DialogActions>
    </Dialog>
  );
};

export default BasicAlertDialog;
