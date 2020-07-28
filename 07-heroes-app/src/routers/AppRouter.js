import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
    
    const {user} = useContext(AuthContext); //obtengo los datos del usuario si está logueado
    
    return (
        <Router>
            <div>
            
                <Switch>
                    <Route exact path="/login" component={ LoginScreen }/>
                    <PrivateRoute
                        path="/"
                        component={ DashboardRoutes }
                        isAuthenticated={user.logged}
                        />
                </Switch>
            </div>
        </Router>
    )
}
