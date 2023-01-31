import { styled as MUIStyled } from '@mui/system';
import { Paper } from '@mui/material';

export const Container = MUIStyled(Paper)({
  display: 'flex',
  marginTop: 50,
  // flexDirection: 'column'
});

export const ImageContainer = MUIStyled('div')({
  margin: 'auto',
  flex: 1,
  padding: 20,
});

export const ResultsContainer = MUIStyled('div')({
  flex: 3,
  marginLeft: 20,
  display: 'flex',
  flexDirection: 'column',
});

export const Wrapper = MUIStyled('div')({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  padding: '20px',
});

