import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; //para hacer obligatorio isAuthenticated y la funcion component

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    return (
        <Route {...rest}
            component = { (props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="auth/login"/> )
            )
            }
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}
