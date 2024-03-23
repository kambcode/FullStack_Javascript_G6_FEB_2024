// Tipos de datos
let name = "Kambcode Latam"; // string
const age = 3;  // number
const isColombian = true; // bolean
// const isAdult = age > 18; // true | false

// function sayHello () {
//     console.log("Hola Soy una función")
// }
// Arrow function, es una nueva forma de escribir funciones en JS 
// para almacenarlas en una variable
const sayHello = () => {
    console.log("Hola soy un arrow function ( => ) ")
}

const isAdult = ( age ) => {
    const result = age > 18;
    // console.log("Es adulto ? ", result)
    return result;
}

const personIsAdult = isAdult(19);
console.log("Una persona de 19 años es adulta?", personIsAdult )