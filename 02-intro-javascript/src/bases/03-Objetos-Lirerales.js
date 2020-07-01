const persona = {
    nombre: 'Lucy',
    apellido: 'Gim',
    edad: 25,
    direcion: {
        ciudad: 'México',
        cp: '15032',
        lat: 15.873465,
        long: 12.87563,
    }
}
//los objeto literales al mostrarse en el navegador se ordenan la propiedades
/*si un objeto se asigna a otra variable y en la nueva variable modificamos
el valor de una propiedad, realmente se modifica el valor del objeto original pero por refenrecia
por lo que si deseamos una copia del objeto original en otro, se debe crear otro objeto con las mismas 
caracteristicas del objeto original, para ahorrarse todo eso de escribir las mismas propiedades del objeto
original podemos hacer uso de spread operator 
y de esa manera podemos tener un clon del objeto original
*/

const persona2 = {...persona}
persona2.nombre = 'Juan'

console.log(persona)
console.log(persona2)
