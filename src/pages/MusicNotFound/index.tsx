import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import ilustrationNotFound from '../../assets/ilustration-not-found.svg';

import {
  Container,
  Content,
  AnimationContainer,
  IlustrationNotFound,
  SearchIcon,
} from './styles';

const MusicNotFound: React.FC = () => {
  const history = useHistory();

  const backToSearch = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Lendo música" />

          <h1>Letra não encontrada</h1>

          <IlustrationNotFound
            src={ilustrationNotFound}
            alt="Música não encontrada"
          />

          <p>
            Essa música ainda não foi escrita, mas não fique triste, você pode
            acessar milhares de músicas realizando uma nova busca S2
          </p>

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

export default MusicNotFound;
