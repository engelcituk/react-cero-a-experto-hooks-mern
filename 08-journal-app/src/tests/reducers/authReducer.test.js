import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {

    test('Debe de realizar el login', () => {

        const initState =  {};
        const action  = {
            type: types.login,
            payload:{
                uid: 'abc',
                displayName : 'Luci'
            }
        };

        const state = authReducer(initState, action )

        expect(state).toEqual({
            uid: 'abc',
            name : 'Luci'
        })
    })

    test('Debe de realizar el logout', () => {

        const initState =  {
            uid: 'abc98756usuena',
            name : 'Luci'
        };
        const action  = {
            type: types.logout
        };

        const state = authReducer(initState, action )

        expect(state).toEqual({})
    })


    test('No debe de hacer cambios', () => {

        const initState =  {
            uid: 'abc98756usuena',
            name : 'Luci'
        };
        const action  = {
            type: 'sidusdjsd'
        };

        const state = authReducer(initState, action )

        expect(state).toEqual(initState)
    })
    
})
