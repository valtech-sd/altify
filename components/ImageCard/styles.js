import { styled as MUIStyled } from '@mui/system';
import { Paper } from '@mui/material';

export const Container = MUIStyled(Paper)({
  display: 'flex',
  marginTop: 50,
});

export const ImageContainer = MUIStyled('div')({
  flex: 1,
});

export const ResultsContainer = MUIStyled('div')({
  flex: 2,
  marginLeft: 20,
  display: 'flex',
  flexDirection: 'column',
});

export const Wrapper = MUIStyled('div')({
  display: 'flex',
  flex: 1,
});

export const Content = MUIStyled('div')((props) => ({
  display: 'flex',
  minWidth: props.width,
  marginLeft: props.marginLeft,
}));
