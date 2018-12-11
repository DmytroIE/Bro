import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tests from './Tests';
import Functional from './Functional';
import Creator from './Creator';

const Mainpage = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Tests} />
      <Route path="/functional" component={Functional} />
      <Route path="/creator" component={Creator} />
    </Switch>
  </main>
);

export default Mainpage;
