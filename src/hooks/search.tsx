import React, { createContext, useCallback, useContext, useState } from 'react';

interface LyricData {
  artist: string;
  music: string;
  lyric: string;
}

interface SearchContextData {
  searchData: LyricData;
  saveSearch(data: LyricData): Promise<void>;
  changeSearchData(key: string): void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<LyricData>({} as LyricData);

  const saveSearch = useCallback(
    async ({ artist, music, lyric }: LyricData) => {
      const searchData = {
        artist,
        music,
        lyric,
      };

      localStorage.setItem(`${artist} - ${music}`, JSON.stringify(searchData));

      setData({ artist, music, lyric });
    },
    [],
  );

  const changeSearchData = useCallback((key: string) => {
    const musicStorage = localStorage.getItem(key);

    if (musicStorage) {
      const { artist, music, lyric } = JSON.parse(musicStorage);

      setData({ artist, music, lyric });
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchData: data, saveSearch, changeSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  return context;
}
