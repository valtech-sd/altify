import styled from 'styled-components';
import { styled as MUIStyled } from '@mui/system';

export const Container = styled.div`
  display: flex;
  margin-top: 5;
  width: 100%;
`;

export const Header = styled.h2`
  color: rgb(118, 248, 176);
  margin: 0,
  text-align: center;
`;

export const TagLabel = MUIStyled('div')({
  fontWeight: 'bold',
  paddingLeft: 40,
  minWidth: 200,
});
