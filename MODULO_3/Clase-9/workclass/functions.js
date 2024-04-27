// FUNCIONES
// ¿Qué es una función?
// Una función en JavaScript es un bloque de código que realiza una tarea específica. 
// Puedes pensar en ella como una especie de máquina que toma algo (entradas), hace algo con eso, y luego produce un resultado (salida).

// ¿Por qué usar funciones?
// Las funciones nos permiten escribir código reutilizable y modular.
// En lugar de escribir el mismo código una y otra vez, podemos definir una función que realice esa tarea y simplemente llamar a esa función cuando la necesitemos.

// Sintaxis básica:
// Para definir una función en JavaScript, usamos la palabra clave function, seguida del nombre de la función y paréntesis (), donde opcionalmente podemos especificar 
// los parámetros de entrada y de salida. Después, viene un bloque de código encerrado entre llaves {} que contiene las instrucciones que queremos que la función realice.

nombreDeLaFuncion(); // Una funcion se puede ejecutar antes de su declaracion por el hoisting

// Funcion sin parametros (datos de entrada o input)
function nombreDeLaFuncion() {
    console.log('Hello world');
}

// Funcion con parámetros
function nombreDeLaFuncionConParametros(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
}

console.log(nombreDeLaFuncionConParametros.toString());

// LLamar a una función
// Una vez que hemos definido una función, podemos llamarla o invocarla en cualquier parte de nuestro código
// simplemente escribiendo su nombre seguido de los parentesis ()
//let result = nombreDeLaFuncion();
//console.log(result); // undefined
//console.log(nombreDeLaFuncion()); // undefined
const sdfsdfdsf = 1;
nombreDeLaFuncionConParametros(sdfsdfdsf, 2);

// Parámetros y argumentos:
// Los parámetros son variables que se utilizan en la definición de la función para representar los valores que se pasan a la función cuando se llama.
// Los argumentos son los valores reales que se pasan a la función cuando se llama.

// Valor de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave return.
// Esto es útil cuando queremos que nuestra función produzca algún resultado que podamos usar más tarde en nuestro programa.
function restar(numero1, numero2) {
    return numero1 - numero2;
}

let resultado = restar(5, 2);
console.log(resultado);
console.log(restar(5, 2));

// RETO
// 1. Mostrar el nombre y la edad de una persona usando una funcion. Si la persona es mayor de edad debe decir que
// es mayor de edad y si no menor de edad.
function verificarMayoriaDeEdad(nombre, edad) {
    if(edad >= 18) {
        console.log(nombre, "Eres mayor de edad")
    } else {
        console.log(nombre, "Eres menor de edad")
    }
}

console.log(verificarMayoriaDeEdad("Daniel",19));
verificarMayoriaDeEdad("Juan",17);
verificarMayoriaDeEdad("Andres",10);

// Arrow functions
// Son funciones declaradas con una sintaxis mas practica para evitar escribir codigo de mas.
// Necesita ser guardada en una variable para poder ser ejecutada.
const sumar = (num1, num2) =>  num1 + num2;
console.log(sumar(4, 5));


// Funciones anónimas y expresiones de función:
// Además de las funciones con nombre que acabamos de ver, también puedes crear funciones anónimas (sin nombre).
// Las funciones anónimas deben guardarse en memoria para poder ser ejecutadas ya que no tienen un nombre o identificador definido. 
// Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de =), esto es una Expresión de función.
// Si queremos ejecutar una funcion anónima sin guardarla en memoria debemos usar las IIFE (sigla en inglés).

// Funcion anónima sin retorno
let saludar = function() {
    console.log('Hola');
};

saludar();

// Funcion anónima con retorno
let multiplicar = function(num1, num2) {
    return num1 * num2;
};

console.log(multiplicar); // Me imprime el valor de la variable que en este caso es function(num1, num2) {...}
console.log(multiplicar(7, 4));

// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function() {
    console.log('Greetings');
})();

(() => console.log('Hello from arrow function'))();

// IIFE con retorno
let greetings = function() {
    return 'Greetings';
}();
console.log(greetings);

let greetings2 = (() => 'Greetings2')();
console.log(greetings2);


