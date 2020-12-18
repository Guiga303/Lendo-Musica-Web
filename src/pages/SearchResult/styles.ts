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

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  h2 {
    margin-top: 54px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const LyricsFoundButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  background: #219ebc;
  width: 340px;
  padding: 24px 0;
  border-radius: 10px;
  border: none;

  strong {
    font-size: 22px;
    font-weight: bold;
    margin-left: 22px;
    color: #fff;
  }

  span {
    font-size: 22px;
    margin-left: 22px;
    color: #fff;
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-bottom: 0;
`;
