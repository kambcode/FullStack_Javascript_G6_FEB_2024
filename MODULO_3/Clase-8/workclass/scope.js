// VAR vs LET vs CONST
/* VAR */
let edad = 18;
edad = 20;
edad = 5;
console.log(edad);

// let edad = 15; -> Lanza un error porque ya esta declarada la variable edad

let profesion;
console.log(profesion); // undefined

/* CONST */
const nombre = 'Juan';
const animales = ['perro', 'gato'];
animales.push('iguana'); // Deja agregar nuevos items porque no se altera la referencia de la variable animales
// animales = []; -> Lanza un error porque una constante no se puede reasignar
console.log(animales);
// nombre = 'Leo'; -> Lanza un error porque una constante no se puede reasignar

// const ciudad; -> Lanza un error porque una constante debe estar inicializada con un valor
// const nombre = 'Sergio'; -> Lanza un error porque una constante no se puede redeclarar

/* VAR */
console.log('CUIDAD: ', ciudad); // Con var se puede acceder a las variables antes de que estan sean creadas
var ciudad = 'Bogota';
ciudad = 'Armenia';
ciudad = 'Medellin';
console.log(ciudad);

var ciudad;
ciudad = 'Neiva';
console.log(ciudad);
var animal;
console.log(animal); // undefined

/*
    VAR
    - Scope: Función
    - Re asignar: Sí
    - Re declarar: Sí
    - Declarar sin valor inicial: Sí
    - Hoisting: undefined


    LET
    - Scope: Bloque
    - Re asignar: Sí
    - Re declarar: No
    - Declarar sin valor inicial: Sí
    - Hoisting: TDZ (zona de muerte temporal)


    CONST
    - Scope: Bloque
    - Re asignar: No
    - Re declarar: No
    - Declarar sin valor inicial: No
    - Hoisting: TDZ (zona de muerte temporal)
*/



// SCOPE
// El "scope" en JavaScript se refiere al alcance de una variable, es decir, dónde en tu código puedes usar y acceder a esa variable.
// Imagina que tienes un montón de cajas, cada una con un nombre escrito en ella.
// El "scope" sería como el lugar donde puedes ver y usar esas cajas.
// En Js los scopes se determinan por las llaves { } (Scope de bloque) o por funciones (Scope de funcion).
// Todos parten de un scope global (donde se empieza a ejecutar un programa)
// Las variables definidas dentro de una función sólo son accesibles dentro de esa función, a menos que sean variables globales.
// Nota: La clave para entender scopes tanto de bloque como de funcion es preguntar dónde estoy usando una variable y cómo la estoy declarando (let, const o var)

// Scope de bloque
// Javascript, cuando se encuentra con multiples scopes anidados, verifica las variables de adentro hacia afuera
// Si no existe una variable en el scope mas interno (inner scope) la buscará en el scope mas externo (outer scope)
let objeto = 'Computador';
console.log('objeto: ', objeto);

if (true) {
    console.log('objeto dentro del if: ', objeto);
}

if (true) {
    if (true) {
        console.log('objeto dentro del if anidado: ', objeto);
    }
}

// Shadowing -> Cuando una variable se declara en un scope interno opaca a otra que esta declarada en un scope externo con el MISMO nombre
let fruta = 'Fresa';
var fruta2 = 'Mora';

if (true) {
    let fruta = 'Mango';
    var fruta2 = 'Limon';
    // const fruta2 = 'Limon';
    console.log('frutan dentro del if: ', fruta);
}

console.log('fruta desde scope global: ', fruta);
// Si imprime esta variable si se declara con var, si no lanza un error porque no estaria declarada en el scope que se usa
// Al final si se declara con var, el valor mostrado es Limon porque es la ultima asignacion que tuvo esa variable
console.log(fruta2);


// Scope de función
let estudiante = 'Wilson';

function doSomething() {
    let estudiante2 = 'Camilo';
    let estudiante = 'Felipe';
    console.log('estudiante2: ', estudiante2);
    console.log('estudiante: ', estudiante);
}

doSomething();

console.log(estudiante);
// console.log(estudiante2); -> Lanza un error porque esta variable esta declarda dentro del scope de la funcion doSomething y no en el scope global


// var vs let en scopes
let car = 'Ferrari';
function printCar() {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    var car2 = 'Audi';
                }
            }
        }
        let car3 = 'BMW';
        console.log('car desde scope interno: ', car);
        console.log('car2 desde scope interno: ', car2);
        console.log('car3 desde scope interno: ', car3);
    }

    console.log('car desde scope de funcion: ', car);
    console.log('car2 desde scope de funcion: ', car2);
}

// console.log(car2); Lanza un error porque esta variable esta declarada dentro del scope de la funcion printCar y no en el scope global

printCar();