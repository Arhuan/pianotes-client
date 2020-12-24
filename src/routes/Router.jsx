import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RankingComponent from '../components/ranking/RankingComponent';
import SettingsComponent from '../components/settings/SettingsComponent';
import UserComponent from '../components/user/UserComponent';
import HomePage from '../pages/home/HomePage';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/ranking" component={RankingComponent} />
      <Route path="/settings" component={SettingsComponent} />
      <Route path="/user" component={UserComponent} />
    </Switch>
  );
}

export default Router;
