import { styled } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';

export const Button = styled(LoadingButton)({
  color: 'black',
  backgroundColor: 'rgb(118, 248, 176)',
  border: 'none',
  borderRadius: 4,
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  height: 40,
  padding: '0 20px',
  textTransform: 'none',
  fontSize: 16,
  '&:hover': {
    backgroundColor: 'rgb(118, 248, 176)',
    border: 'none',
  },
});
