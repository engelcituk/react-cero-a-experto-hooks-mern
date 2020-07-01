//arreglos con es con llaves cuadradas
const arreglo = [1,2,3,4,5];

let arreglo2 = [...arreglo,6];

/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.*/
const arreglo3 = arreglo2.map( (numero) =>{
    return numero * 2;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
