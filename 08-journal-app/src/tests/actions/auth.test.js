import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'; 

import { logout, login, startLogout, startLoginEmailPassword } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {}

let  store = mockStore( initState )

describe('Pruebas con las acciones de auth', () => {

    beforeEach( ()=> {
        store = mockStore( initState );
    })

    test('Login y logout deben de crear la accion respectiva ', () => {
      
        const uid = 'ABC123';
        const displayName = 'Fernando';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        })

        expect(logoutAction).toEqual({
            type: types.logout
        })
    })

    test('startLogout debe de realizar el logout', async () => {

        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    })
    
    test('Debe de iniciar el startLoginEmailPassword ', async (done) => {

        await store.dispatch( startLoginEmailPassword('test@testing.com','123456') );

        const  actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid:'qGdddc6wQMhntEIY6BUtfXqR6b42',
                displayName: null
            }
        })
        done();
    },30000)
    
})
