import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en el archivo 05-funciones.js', ()=> {
    test('getUser Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)
    })
    
    test('getUsuarioActivo Debe de retornar un objeto', () => {
        const nombre = 'Pedro';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest)
    })
})

