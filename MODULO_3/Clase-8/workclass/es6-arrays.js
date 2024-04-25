// MAP, FILTER, FIND, FOREACH, SOME, EVERY
// map(): Este método crea un nuevo array con los resultados de llamar a una función proporcionada como argumento en cada elemento del array original.
const numbers = [1, 2, 3, 4, 5];

// como lo hariamos de forma tradicional
/*const arr = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    arr.push(element * 2)
}

console.log(arr);*/

const doubled = numbers.map(num => num * 2);
// console.log(doubled);


// filter(): Retorna un nuevo array con todos los elementos que pasan una condición proporcionada por una función.

// como lo hariamos de forma tradicional
/*const arr = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        arr.push(element)
    }
}

console.log(arr);*/

const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);

// Tambien es posible combinar varios metodos de arrays en una misma asignacion
// Que pasa si queremos filtrar una lista de numeros para encontrar los pares y
// despues de tener la lista de solos los pares, retornar una lista de cada numero doblado
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredAndDoubled = numeros
    .filter(num => num % 2 === 0)
    .map(num => num * 2);

console.log(filteredAndDoubled);


// find(): Este método devuelve el primer elemento de un array que cumple con una condición dada.
// Si no encuentra ningún elemento que cumpla con la condic<ión, devuelve undefined.
const firstMinorThanTen = numeros.find(num => num < 10);
console.log(firstMinorThanTen);


// forEach(): Ejecuta una función por cada elemento del array.
// como lo hariamos de forma tradicional
/*const arr = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log('index: ', index)
    console.log(element * 3)
}*/
numeros.forEach((num, index) => {
    console.log('index: ', index);
    console.log(num * 3)
});


// some(): Retorna true si al menos un elemento del array cumple con la condición dada.
const hasEven = numbers.some(num => num > 6);
console.log(hasEven);


// every(): Retorna true si todos los elementos del array cumplen con la condición dada.
const list2 = [2,2,2,2,2,2,2,2,2,2];
const allTwo = list2.every(num => num === 2);
const allEven = numbers.every(num => num === 2);
console.log(allTwo); // true
console.log(allEven); // false

// includes()
console.log('ESTA EL NUMERO? ', numeros.includes('4'));


// RETOS
// 1. Dado un array de números, crea un nuevo array donde cada elemento sea la raiz cuadrada del elemento correspondiente en el array original.
let numbers1 = [21, 33, 40, 50, 61, 70, 80, 90, 100];
const sqrtNumbers = numbers1.map(num => Math.sqrt(num));
console.log(sqrtNumbers);

// 2. Dado un array de números, filtra solo los números impares y muestra el resultado.
const number = [1,2,3,4,5,6,7,8,9,10]
const impares = number.filter(num => num % 2 !== 0);
console.log(impares);

// 3. Dado un array de números, encuentra el primer número que sea divisible por 5.
const divisible5 = number.find(num => num % 5 === 0);
console.log(divisible5);

