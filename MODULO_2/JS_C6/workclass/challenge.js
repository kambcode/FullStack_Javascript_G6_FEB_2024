const person1 = "Pablo";
const person2 = "Pedro";
const person3 = "Ana";

// Escribe una funcion que reciba un nombre
// y que salude a la persona 
// eg. console.log("Hola", personName)
// function sayHello

function sayHello (name) {
    console.log("Hola ", name);
}

sayHello("Juan");  // "Hola Juan"
sayHello(person1); // "Hola Pablo"
sayHello(person2); // "Hola Pedro"
sayHello(person3); // "Hola Ana"