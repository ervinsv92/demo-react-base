import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginPage } from '../pages/LoginPage';
import { PaisesPage } from '../pages/PaisesPage';
import { PrincipalPage } from '../pages/PrincipalPage';
import { SecondPage } from '../pages/SecondPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginPage}></Route>
                    <Route exact path='/principal/:usuario' component={PrincipalPage}></Route>
                    <Route exact path='/secundaria' component={SecondPage}></Route>
                    <Route exact path='/paises' component={PaisesPage}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
