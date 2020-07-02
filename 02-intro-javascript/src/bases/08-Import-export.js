//import {heroes} from './data/heroes'; // se puede importar con imp

/*no hace falta ponerle llaves a heroes porque el array se exporta por default, al importar le damos el nombre que queramos*/
//import heroes, {owners} from '../data/heroes'; 
import heroes from '../data/heroes'; 

//import {heroes, owners} from './data/heroes'; 


export const getHeroeById = (id)=> {
    return heroes.find( (heroe) => heroe.id === id)
}

//console.log(getHeroeById(2));//encuentra el primero que cumple la condición

export const getHeroeByOwner= (owner)=> {
    return heroes.filter( (heroe) => heroe.owner === owner)
}

//console.log(getHeroeByOwner('DC'));//retorna los objetos que cumplen la condicion
//console.log(owners);//retorna los objetos que cumplen la condicion
