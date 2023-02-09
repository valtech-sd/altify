import styled from 'styled-components';

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
