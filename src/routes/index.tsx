import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Search from '../pages/Search';
import LatestSearch from '../pages/LatestSearchs';
import SearchResult from '../pages/SearchResult';
import MusicNotFound from '../pages/MusicNotFound';
import Result from '../pages/Result';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/latest-search" exact component={LatestSearch} />
    <Route path="/search-result" component={SearchResult} />
    <Route path="/music-not-found" component={MusicNotFound} />
    <Route path="/result" component={Result} />
  </Switch>
);

export default Routes;
