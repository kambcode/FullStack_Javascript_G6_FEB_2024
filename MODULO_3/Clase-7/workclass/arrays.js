// ARRAYS
// Es una estructura de datos que puede contener múltiples elementos, 
// accesibles a través de un índice numérico.
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivo como objetos y arrays.
const arr = [1, 2, 3, 'texto', true, false, ['estudiante1', 'estudiante2']];
console.log(arr);

// Acceso a cada elemento dentro de un array
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log('LENGTH: ', arr.length);
//console.log(arr[arr.length - 1]); // Asi se obtiene la ultima posicion de un array

console.log(arr[6][1]);

const arrEstudiantes = arr[arr.length - 1];
console.log(arrEstudiantes[arrEstudiantes.length - 1]);

// Modificar un valor de un array (manual)
arr[1] = true;
// console.log(arr);

// repaso ciclos
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Iteración en los arrays
// Podemos usar ciclos para acceder a cada elemento dentro de un array
// Ciclo for
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// Ciclo forEach
arr.forEach(function(element, index) {
    console.log(`${element} - ${index}`);
});

// Ciclo for of
for (const element of arr) {
    console.log(element);
}


// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en JS
const animals = ['perro', 'gato', 'oso', 'leon', 'elefante', 'pajaro'];

// length -> Muestra la cantidad de elementos que hay en el array
console.log(animals.length);

// push -> Agrega un nuevo elemento al array (al final)
animals.push('tigre', 'hormiga');
console.log(animals);
console.log(animals.length);

// pop -> Elimina el ultimo elemento dentro de un array y lo retorna
const animalRemoved = animals.pop();
console.log(animals);
console.log(animalRemoved);
console.log(animals.length);

// shift -> Elimina el primer elemento dentro de un array y lo retorna
const animalRemovedWithShift = animals.shift();
console.log(animals);
console.log(animalRemovedWithShift);
console.log(animals.length);

// unshift -> Agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
animals.unshift('liebre', 'tortuga');
console.log(animals);
console.log(animals.length);

// split -> En realidad es un metodo de los strings pero convierte un string en un array
const palabra = 'reconocer';
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Invierte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero
const reversedArray = splittedArray.reverse();
console.log(reversedArray);

// join -> Une todos los elementos de un array en un string y devuelve este string
const palabraInvertida = reversedArray.join('');
console.log(palabraInvertida);
console.log(palabra === palabraInvertida);


// RETO
// 1. Tomando este array ['bmw', 'bugatti', 'lamborgini', 'ferrari', 'fiat', 'mclaren', 'mazda']
// Debe retornar un array con los carros que empiezan en b y otro con los que terminan en i
// starsWith('f')
// endsWith('f')
const arrCar = ['bmw','bugati','lamborgini','ferrari','fiat','mclaren','mazda'];
const arrStarsWithB = [];
const arrEndsWithI = [];

arrCar.forEach((car) => {
    if (car.startsWith('b')) {
        arrStarsWithB.push(car);
    }
    
    if (car.endsWith('i')) {
        arrEndsWithI.push(car);
    }
});


console.log("Array por B: ", arrStarsWithB);
console.log("Array por I: ", arrEndsWithI);

// Comparación entre arrays (referencia vs valor)
// En arrays y objetos la comparación se hace por referencia y no por valor

// Comparacion en primitivos
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

// Comparacion entre arrays
const arr1 = [1,7,8];
const arr2 = [1,7,8];
console.log(arr1 === arr2);

const arr3 = arr1; // arr3 -> arr1 -> [1,7,8]
console.log(arr1 === arr3);
arr3[0] = 2; // Al compartir la misma referencia cambia el valor en la pos 0 en ambos arrays
console.log(arr1);
console.log(arr3);
console.log(arr1 === arr3);