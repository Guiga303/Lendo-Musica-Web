import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffb703;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #023047;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ffb703')};
  }
`;
