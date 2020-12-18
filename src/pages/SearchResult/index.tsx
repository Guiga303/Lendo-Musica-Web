import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useSearch } from '../../hooks/search';

import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';

import {
  Container,
  Content,
  AnimationContainer,
  LyricsFoundButton,
  SearchIcon,
} from './styles';

const SearchResult: React.FC = () => {
  const { searchData } = useSearch();

  const { artist, music } = searchData;

  const history = useHistory();

  const goToResult = useCallback(() => {
    history.push('/result');
  }, [history]);

  const backToSearch = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Lendo música" />

          <h1>Letra encontrada</h1>

          <LyricsFoundButton type="button" onClick={goToResult}>
            <strong>{artist}</strong>
            <span>{music}</span>
          </LyricsFoundButton>

          <h2>Não encontrou o que procurava?</h2>

          <Button
            containerStyle={{ width: 340 }}
            type="submit"
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

export default SearchResult;
