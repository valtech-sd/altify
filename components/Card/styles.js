import styled from 'styled-components';
import { styled as MUIStyled } from '@mui/system';

export const Container = styled.div`
  display: flex;
  marginTop: 5;
`;

export const Header = styled.h2`
  color: rgb(118, 248, 176);
  margin: 0,
  text-align: center;
`;

export const Wrapper = MUIStyled('div')({
  display: 'flex',
  flexDirection: 'row',
});
