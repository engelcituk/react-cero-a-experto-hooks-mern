//Funciones en JS

function saludar0(nombre) {
    return `Hola, ${nombre}`;    
}

const saludar1 = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; // si el return es algo muy simple y corto se puede quitarlo así como las llaves
const saludar4 = () => `Hola mundo`; // funcion de flecha sin argumento

// Quitar el return y las llaves funcionan bien, pero si desea retornar un objeto, debe ir encerrado en parentesis, recordar que un objeto va entre llaves
const getInfo = ()=> ({
    id:'23533ABC',
    username:'donCrieg'
});

const userInfo= (username)=> ({
    id:'848745',
    username: username
});

console.log(saludar0('Juan'));
console.log(saludar1('Juan'));
console.log(saludar2('Juan'));
console.log(saludar3('Juan'));
console.log(saludar4());
console.log(getInfo());
console.log(userInfo('Coby'));





