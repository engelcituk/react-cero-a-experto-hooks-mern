import { logout, login } from '../../actions/auth';
import { types } from '../../types/types';

describe('Pruebas con las acciones de auth', () => {

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

    
    
})
