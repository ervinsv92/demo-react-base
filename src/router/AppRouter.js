import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginPage } from '../pages/LoginPage';
import { PrincipalPage } from '../pages/PrincipalPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginPage}></Route>
                    <Route exact path='/principal/:usuario' component={PrincipalPage}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
