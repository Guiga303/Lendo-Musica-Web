import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';

import { useSearch } from '../../hooks/search';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';

import { Container, Content, AnimationContainer, SearchIcon } from './styles';

interface SearchFormData {
  artist: string;
  music: string;
}

const Search: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { saveSearch } = useSearch();

  const history = useHistory();

  const searchLyric = useCallback(
    async (data: SearchFormData) => {
      setLoading(true);

      try {
        const schema = Yup.object().shape({
          artist: Yup.string().required('Artista obrigatório'),
          music: Yup.string().required('Música obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { artist, music } = data;

        const response = await api.get(`/${artist}/${music}`);

        const lyric = response.data.lyrics;

        const searchData = {
          artist,
          music,
          lyric,
        };

        if (lyric === '') {
          setLoading(false);
          history.push('/music-not-found');
        } else {
          await saveSearch(searchData);
          setLoading(false);
          history.push('/search-result');
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          setLoading(false);
        }
      }
    },
    [history, saveSearch],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Lendo música" />

          <Form ref={formRef} onSubmit={searchLyric}>
            <h1>Buscar letra</h1>

            <Input
              containerStyle={{ marginBottom: 24 }}
              name="artist"
              placeholder="Insira o nome do artista"
            />

            <Input
              containerStyle={{ marginBottom: 24 }}
              name="music"
              placeholder="Insira o nome da música"
            />

            <Button
              loading={loading}
              containerStyle={{ marginTop: 50 }}
              type="submit"
            >
              <SearchIcon src={searchIcon} alt="Icone de buscar" />
              Buscar
            </Button>

            <Link to="latest-search">Últimas buscas</Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Search;
