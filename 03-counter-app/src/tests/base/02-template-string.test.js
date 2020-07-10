import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', ()=> {
    test('getSaludo debe de retornar Hola Cituk', () => {
        //1.Inicializacion
         const nombre = 'Cituk';
     
         //2. Estimulo
         const saludo = getSaludo(nombre);
     
         //3. Observa el comportamiento
         expect(saludo).toBe('Hola '+nombre)
     })
     // getSaludo debe de retornar Hola Juan sino hay argumento

     test('getSaludo debe de retornar Hola Juan sino hay argumento nombre   ', () => {
        
         const saludo = getSaludo();
         expect(saludo).toBe('Hola Juan')
     })
})

