import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home: FC = () => <div>Home</div>;
const User: FC = () => <div>User</div>;

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/users/:id" component={User}></Route>
    </Switch>
  );
};

export default Routing;
