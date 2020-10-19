import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( startChecking() );
    }, [ dispatch ])

    if( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated= { !!uid } //al negar un string doblemente se transforma en true
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isAuthenticated= { !!uid } //al negar un string doblemente se transforma en true
                    />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
