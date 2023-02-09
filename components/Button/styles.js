import { styled } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';

export const Button = styled(LoadingButton)(({ secondary }) => ({
  color: secondary ? '#fff' : '#000',
  backgroundColor: secondary ? '#000' : 'rgb(118, 248, 176)',
  border: 'none',
  borderRadius: 4,
  height: 60,
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  padding: '0 20px',
  textTransform: 'none',
  fontSize: 16,
  '&:hover': {
    backgroundColor: secondary ? '#6B6B6B' : 'rgb(118, 248, 176)',
    border: 'none',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'all !important',
  },
}));
