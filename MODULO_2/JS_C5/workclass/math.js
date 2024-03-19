// La libreria de matematicas de javascript Math

// 1. Generar numeros aleatorios
// Math.random() -> genera un numero aleatorio entre 0 y 1
// console.log("Numero aleatorio", Math.random());

// Math.random() * 10 -> genera un numero aleatorio entre 0 y 10
console.log("Numero aleatorio entre 0 y 10", Math.random() * 10 );

// Math.random() * 100 -> genera un numero aleatorio entre 0 y 100
console.log("Numero aleatorio entre 0 y 100", Math.random() * 100 );

const aleatorio = Math.random() * 10;
console.log("Mi numero aleatorio es: ",aleatorio);

// 2. Math.round() -> redondea un numero
console.log("Mi numero aleatorio redondeado es: ", Math.round(aleatorio))