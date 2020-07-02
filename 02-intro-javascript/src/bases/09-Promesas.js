import {getHeroeById} from './bases/08-Import-export';

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el dato')
    }, 2000);
});

/* promesa.then( (heroe)=> {
    console.log('Heroe',heroe)
}).catch( (err)=> console.warn(err)); */

const getHeroeByIdAsync = (id)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
            resolve(heroe);
            }else{
            reject('No se pudo encontrar el dato')
            }
        }, 2000);
    });
}


getHeroeByIdAsync(9).then( heroe =>
    console.log('heroe', heroe)
).catch( err => console.warn(err))

getHeroeByIdAsync(9).then(console.log).catch(console.warn) //se puede reducir lo anterior a esto