// Filtro desde cero
const usuarios = [
    {
        nombre: 'Juan',
        apellido: 'Lopez',
        edad: 18
    },
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25
    },
    {
        nombre: 'Camilo',
        apellido: 'Beltran',
        edad: 20
    },
    {
        nombre: 'Luisa',
        apellido: 'Jimenez',
        edad: 30
    }
];

// 1. Filtrar por nombres que empiecen por L
// Filtro normal
const filtrados = [];
for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    if (usuario.nombre.startsWith('L')) {
        filtrados.push(usuario);
    }
}
console.log(filtrados);

// Filtrar usando filter
const filteredUsers = usuarios
    .filter(user => user.nombre.startsWith('L'))
    .map(user => user.nombre);
console.log(filteredUsers);

// Filter customizado
function filterCustom(array, callback) {
    const filtrados = [];
    for (let i = 0; i < array.length; i++) {
        const usuario = array[i];
        const pasaFiltro = callback(usuario, i);
        if (pasaFiltro) {
            filtrados.push(usuario);
        }
    }

    return filtrados;
}

const finalUsers = filterCustom(usuarios, (user, index) => {
    console.log(index);
    return user.nombre.startsWith('L');
});
console.log(finalUsers);

// Ejecuta operaciones aritmeticas: sumar, restar, multiplicar, dividir, raiz cuadrada

// Funcion de alto orden (High order function)
function ejecutarOperacionAritmetica(numero1, numero2, callback) {
    const resultado = callback(numero1, numero2);
    return resultado;
}

const sumar = (num1, num2) => num1 + num2;
const resultadoSuma = ejecutarOperacionAritmetica(2, 1, sumar);
console.log(resultadoSuma);

const restar = (num1, num2) => num1 - num2;
const resultadoResta = ejecutarOperacionAritmetica(12, 7, restar);
console.log(resultadoResta);

const multiplicar = (num1, num2) => num1 * num2;
const resultadoMultiplicacion = ejecutarOperacionAritmetica(150, 7, multiplicar);
console.log(resultadoMultiplicacion);

const dividir = (num1, num2) => num1 / num2;
const resultadoDivision = ejecutarOperacionAritmetica(14744575, 454, dividir);
console.log(resultadoDivision);

const obtenerRaizCuadrada = (num1, num2) => ({
    raizNum1: Math.sqrt(num1),
    raizNum2: Math.sqrt(num2)
});
const resultadoSqrt = ejecutarOperacionAritmetica(101, 45, obtenerRaizCuadrada);
console.log(resultadoSqrt);


const numeros = [1, 2, 3, 4, 5];
const nuevoArray =  numeros.map((numero) => numero * 2);
console.log(nuevoArray);
