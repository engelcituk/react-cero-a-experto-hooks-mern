const personajes = ['Coby','Sanji', 'Luffy'];

const [, ,p3]=personajes;

console.log(p3);

const returnArray = ()=> {
    return ['ABC', 123]
}

const [letras, numeros ] = returnArray();

console.log(letras, numeros);

const arreglo = (valor)=> {
    return [valor, ()=> {console.log('Hola...')}];
}

const [arr, setFunction] = arreglo('Garp'); //desestructracion que incluye una función

console.log(arr);
setFunction();