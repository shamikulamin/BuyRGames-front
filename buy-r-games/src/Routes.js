import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {SearchResultsComponent} from './SearchResults.Component/SearchResultsComponent'

export default () => (
<BrowserRouter>
    <Switch>/>
      <Route path="/search" component={SearchResultsComponent}/>
    </Switch>
</BrowserRouter>
);