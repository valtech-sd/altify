import { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { func, string } from 'prop-types';
import { styled } from '@mui/system';

import { serverUrl } from '../../constants/constants';
import Input from '../Input';

const green = 'rgb(118, 248, 176)';

const Butt = styled(Button)({
  color: '#000',
  fontWeight: 'bold',
  letterSpacing: '1px',
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const propTypes = {
  setCorrectPassword: func.isRequired,
  handlePasswordChange: func.isRequired,
  password: string.isRequired,
};

const Alert = ({ setCorrectPassword, handlePasswordChange, password }) => {
  const [open, setOpen] = useState(true);

  async function handleClose(event) {
    event.preventDefault();
    if (!password) return;

    try {
      const response = await fetch(`${serverUrl}/verifyPassword`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authentication: password,
        },
      });

      if (response.status === 401) {
        alert('Incorrect password');
        return;
      }

      if (response.status === 200) {
        setCorrectPassword(true);
        setOpen(false);
        return;
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted aria-describedby="alert-dialog-slide-description">
      <DialogTitle>Please enter the password</DialogTitle>
      <DialogContent>
        <form onSubmit={handleClose}>
          <Input autoFocus type="password" fullWidth value={password} onChange={handlePasswordChange} />
        </form>
      </DialogContent>
      <DialogActions>
        <Butt onClick={handleClose}>Enter</Butt>
      </DialogActions>
    </Dialog>
  );
};

Alert.propTypes = propTypes;

export default Alert;
