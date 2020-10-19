import { types } from '../types/types';
import { fetchSinToken } from '../helpers/fetch';
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

export const login = ( user ) => ({ 
    type: types.authLogin,
    payload: user
})



export const authChecking = ( event ) => ({
    type: types.authChecking,
    payload: event
})

export const authCheckingFinish = ( event ) => ({ 
    type: types.authCheckingFinish,
    payload: event
})




export const authStartTokenRenew = ( event ) => ({ 
    type: types.authStartTokenRenew,
    payload: event
})

export const authLogout = ( event ) => ({ 
    type: types.authLogout
})