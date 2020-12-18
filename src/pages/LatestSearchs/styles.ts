import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;
`;

export const CleanHistoryButton = styled.button`
  margin: 44px 0 32px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: #fff;
`;

export const LatestSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  padding: 24px 0;
  border-radius: 10px;
  border: 2px solid #ffb703;

  margin: 24px 0;
  padding-right: 16px;
  padding-left: 16px;

  font-size: 22px;
  color: #ffb703;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-bottom: 0;
`;
