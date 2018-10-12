import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import BaseLayout from './components/BaseLayout';
import Trending from './components/Trending';
import Watching from './components/Watching';
import Search from './components/Search';
import Sell from './components/Sell';
import Help from './components/Help';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>

        <Route exact path="/" component={App} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/watching" component={Watching} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/sell" component={Sell} />
        <Route exact path="/help" component={Help} />

      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
