import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Registro from '../pages/Registro';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
