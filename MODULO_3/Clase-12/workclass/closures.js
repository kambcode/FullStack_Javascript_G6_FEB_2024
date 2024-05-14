// CLOSURE
// Un closure es una función que tiene acceso a variables externas (locales o globales) incluso después de que la función haya terminado de ejecutarse.
// Esto significa que una función interna puede acceder y recordar el ámbito léxico en el que fue creada, incluso cuando se ejecuta fuera de ese ámbito.
// Se podria definir tambien como una funcion que es retornada por otra funcion, es decir funciones anidadas. 

// Closure con variable local
function exterior() {
    let mensaje = "Hola";

    function interior() {
        console.log(mensaje);
    }

    return interior;
}
  
const funcionInterior = exterior(); 
// En este punto la funcion "exterior" ya no existe dentro del callstack, ya se ejecutó 
// y todas las variables de su scope (lexical scope)... se pierden o mueren también?
// La respuesta es NO!!! pero por que? sencillo, esto es gracias a que Javascript
// analiza el código y ve que hay una funcion interna que usa esa variable
// cuando? no se sabe el caso es que la necesita en caso de que esa funcion sea ejecutada
// por lo que Javascript le indica al garbage collector que NO la elimine si no que la deje
// en memoria, en un espacio llamado heap
console.log('miFuncion: ', funcionInterior.toString());
funcionInterior(); // "Hola"
  
// Podemos mirar un closure como un modulo o una clase
// es decir una pequeña parte o unidad dentro de un codigo que 
// se puede reusar en distintas partes de una aplicacion
function ogro() {
    let name = 'Shrek';

    function saludar() {
        console.log(`${name} saludando...`);
    }

    function comer() {
        console.log(`${name} comiendo...`);
    }

    return {
        saludar,
        comer
    }
}

const shrek = ogro();
shrek.saludar(); // Shrek saludando...
shrek.comer(); // Shrek comiendo...
