import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/about/AboutPage';
import HomePage from '../pages/home/HomePage';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}

export default Router;
