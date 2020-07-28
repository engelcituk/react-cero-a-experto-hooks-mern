import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        //history.push('/');
        dispatch({
            type: types.login,
            payload: {
                name:'Luisito'
            }
        });
        history.replace('/');

    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
            Ingresar
            </button>
        </div>
    )
}
