import { types } from '../types/types';
import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import Swal from 'sweetalert2';

export const startLogin = ( email, password ) => { 

    return async ( dispatch ) => {

        const respuesta = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await respuesta.json();

        if( body.ok ){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name 
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    } 
}

export const startRegister = ( name, email, password ) => { 
    return async ( dispatch ) => {

        const respuesta = await fetchSinToken('auth/new', { name, email, password}, 'POST');
        const body = await respuesta.json();

        if( body.ok ){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name 
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChecking = (  ) => {
    return  async ( dispatch ) => {

        const respuesta = await fetchConToken('auth/renew'); //no requiere un body y por defecto es un get
        const body = await respuesta.json();

        if( body.ok ){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name 
            }))
        } else {
            //Swal.fire('Error', body.msg, 'error');
            dispatch( checkingFinish() );
        }
    }
}

export const startLogout = ( ) => {
    return  async ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );

    }
}


export const checkingFinish = () => ({ 
    type: types.authCheckingFinish
})

export const login = ( user ) => ({ 
    type: types.authLogin,
    payload: user
})


export const logout = () => ({ type: types.authLogout })