import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useSearch } from '../../hooks/search';

import Button from '../../components/Button';

import logoBlueImg from '../../assets/logo-blue.svg';
import searchIcon from '../../assets/search-icon.svg';
import backIcon from '../../assets/back-icon.svg';

import {
  Container,
  Content,
  AnimationContainer,
  BackButton,
  BackIcon,
  SearchIcon,
} from './styles';

const Result: React.FC = () => {
  const { searchData } = useSearch();
  const { artist, lyric } = searchData;

  const history = useHistory();

  const backToSearch = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoBlueImg} alt="Lendo música" />

          <BackButton type="button" onClick={backToSearch}>
            <BackIcon src={backIcon} alt="Voltar" />
            <span>Voltar para a busca</span>
          </BackButton>

          <h1>{artist}</h1>

          <p>{lyric}</p>

          <span>Curtiu? Busque mais letras.</span>

          <Button
            containerStyle={{
              width: 340,
              backgroundColor: '#219EBC',
              marginBottom: 50,
            }}
            type="button"
            onClick={backToSearch}
          >
            <SearchIcon src={searchIcon} alt="Icone de buscar" />
            Buscar
          </Button>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Result;
