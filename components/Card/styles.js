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

export const TagLabel = styled.div`
  font-weight: bold;
  padding: 0 0 20px 0;
`;

export const EditIconContainer = styled.div`
  cursor: pointer;
`;

export const ApproveEditContainer = styled.div`
  display: flex;
`;

export const EditedIndicator = styled.div`
  margin: 0;
  font-size: 12px;
  position: relative;
  bottom: 8px;
`;

export const Label = MUIStyled('div')({
  fontSize: '16px',
  fontWeight: 'bold',
  display: 'flex',
  padding: '0 20px 20px 0',
  margin: 0,
});

export const SelectStyles = {
  fontSize: 18,
  height: '60px',
  color: 'black',
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000',
  },
  '.MuiSvgIcon-root ': {
    fill: 'black !important',
  },
};
