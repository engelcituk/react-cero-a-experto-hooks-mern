import { types } from '../types/types';
import { fetchSinToken } from '../helpers/fetch';

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
        }
    } 
    //type: types.authStartLogin
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



export const authStartRegister = ( event ) => ({ 
    type: types.authStartRegister
})

export const authStartTokenRenew = ( event ) => ({ 
    type: types.authStartTokenRenew,
    payload: event
})

export const authLogout = ( event ) => ({ 
    type: types.authLogout
})