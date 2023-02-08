import { styled } from '@mui/system';
import LoadingButton from '@mui/lab/LoadingButton';

export const EditButton = styled(LoadingButton)({
  color: 'white',
  backgroundColor: '#000',
  border: 'none',
  borderRadius: 4,
  height: 60,
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  padding: '0 20px',
  textTransform: 'none',
  fontSize: 16,
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#6B6B6B',
    border: 'none',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'all !important',
  },
});
