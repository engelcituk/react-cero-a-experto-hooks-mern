//Desestructuración
//Asignación desestructurante

const personaje = {
    nombre: 'Shanks',
    edad: 45,
    sobrenombre: 'Akagami',
    nivel: 'Yonkou'
}

// extrae lo que estoy poniendo dentro de las llaves lo que hay en este objeto (personaje)
const {nombre,edad,sobrenombre:nickname} = personaje; //en la desestructuración no importa el orden

console.log(nombre);
console.log(edad);
console.log(nickname); //podemos asignar el valor en otra variable o  renombrar

const returnPersonaje= ({sobrenombre,nombre, edad, nivel='Capitan'})=>{ //se puede hacer desestructuración en los parametros de una función

    return {
        nombreClave:sobrenombre,
        anios: edad,
        direcion:{
            calle:'desconocido',
            numero:'sin numero'
        }
    }
}
//desestructuración en un objeto anidado
const {nombreClave, anios, direcion:{calle,numero}} = returnPersonaje(personaje);// le pasamos el objeto
console.log(nombreClave, anios);
console.log(calle, numero)
