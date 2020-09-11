import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  
import {useDispatch} from 'react-redux';

import {firebase} from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {
            if(user?.uid){
                dispatch( login( user.uid, user.displayName) );
                setIsLoggedIn(true);
            }
            setChecking(false);
        });

    }, [dispatch, setChecking, setIsLoggedIn])

    if(checking){
        return (
            <h1>Espere</h1>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}

                    />
                    <Route
                        exact
                        path="/"
                        component={JournalScreen}

                    />

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    )
}
