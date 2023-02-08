import { styled as MUIStyled } from '@mui/system';
import { Paper } from '@mui/material';

export const Container = MUIStyled(Paper)({
  display: 'flex',
  marginTop: 50,
  boxShadow: 'none',
  background: '#F7F7F7',
  border: '1px solid #909EB0',
});

export const ImageContainer = MUIStyled('div')({
  margin: 0,
  flex: 1,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ResultsContainer = MUIStyled('div')({
  flex: 3,
  marginLeft: 20,
  display: 'flex',
  flexDirection: 'column',
  borderLeft: '1px solid #909EB0',
});

export const Wrapper = MUIStyled('div')({
  borderTop: '1px solid #909EB0',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  padding: '20px',

  '&:nth-of-type(1)': {
    borderTop: 'none',
  },
});

export const Label = MUIStyled('div')({
  fontSize: '18px',
  lineHeight: '18px',
  display: 'flex',
  alignItems: 'center',
});

export const SelectStyles = {
  fontSize: 18,
  color: 'black',
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(118, 248, 176)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(118, 248, 176)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(118, 248, 176)',
  },
  '.MuiSvgIcon-root ': {
    fill: 'black !important',
  },
};
