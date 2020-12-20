import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useSearch } from '../../hooks/search';

import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';

import {
  Container,
  Content,
  AnimationContainer,
  CleanHistoryButton,
  LatestSearchButton,
  SearchIcon,
} from './styles';

const SearchResult: React.FC = () => {
  const [musics, setMusics] = useState<string[]>([]);

  const { changeSearchData } = useSearch();

  useEffect(() => {
    const keys = Object.keys(localStorage);
    setMusics(keys);
  }, []);

  const history = useHistory();

  const goToResult = useCallback(
    async event => {
      const { id } = event.target;

      changeSearchData(id);

      history.push('/result');
    },
    [changeSearchData, history],
  );

  const cleanHistory = useCallback(() => {
    localStorage.clear();
    setMusics([]);
  }, []);

  const backToSearch = useCallback(() => {
    history.push('/');
  }, [history]);

  let noMusic;
  if (musics.length === 0) {
    noMusic = <span>Sem música 🙁</span>;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Lendo música" />

          <CleanHistoryButton type="button" onClick={cleanHistory}>
            Limpar histórico
          </CleanHistoryButton>

          {noMusic}

          {musics &&
            musics.map(music => (
              <LatestSearchButton id={music} type="button" onClick={goToResult}>
                {music}
              </LatestSearchButton>
            ))}

          <Button
            containerStyle={{ width: 340, marginBottom: 70 }}
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
