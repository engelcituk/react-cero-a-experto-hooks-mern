import { types } from '../types/types';

export const startLogin = ( email, password ) => { 

    return async () => {
        console.log(email, password);
    }
    //type: types.authStartLogin
}

export const authChecking = ( event ) => ({
    type: types.authChecking,
    payload: event
})

export const authCheckingFinish = ( event ) => ({ 
    type: types.authCheckingFinish,
    payload: event
})


export const authLogin = ( event ) => ({ 
    type: types.authLogin,
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