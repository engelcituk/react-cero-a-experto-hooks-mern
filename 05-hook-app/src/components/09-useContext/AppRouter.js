import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                  <Switch>
                      <Route exact path="/about" component={ AboutScreen} />
                      <Route exact path="/login" component={ LoginScreen} />
                      <Route exact path="/" component={ HomeScreen } />

                 </Switch>  
                </div>
            </Router>
        </div>
    )
}
