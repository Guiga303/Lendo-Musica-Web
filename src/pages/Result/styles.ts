import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #fff;

  display: flex;
  flex: 1;
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

  > img {
    margin-top: 50px;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #023047;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  p {
    display: flex;
    justify-content: stretch;
    width: 340px;
    font-size: 24px;
    color: #023047;
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

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 54px;
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: #219ebc;
`;

export const BackIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  margin-bottom: 0;
`;
