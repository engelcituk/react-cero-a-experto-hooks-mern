import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <div>
            
            <Router>
                <NavBar/>
                <div>
                  <Switch>
                      <Route exact path="/about" component={ AboutScreen} />
                      <Route exact path="/login" component={ LoginScreen} />
                      <Route exact path="/" component={ HomeScreen } />
                      {/* <Route component={ HomeScreen } /> */}
                      <Redirect to="/"/>

                 </Switch>  
                </div>
            </Router>
        </div>
    )
}
