import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  cursor: pointer;
  margin-top: 16px;
  height: 56px;
  background: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover{
    background: ${shade(0.2, '#ff9000')};
  }
`;
