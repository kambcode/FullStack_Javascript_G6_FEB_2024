// Async/await es una característica introducida en ECMAScript 2017 (también conocido como ES8) que simplifica el trabajo con funciones asíncronas y promesas en JavaScript.
// Esta característica permite escribir código asíncrono de manera más legible y mantenible, especialmente cuando se trabaja con múltiples operaciones asíncronas.

/*
La sintaxis de async/await se compone de dos palabras clave principales: async y await.

async: Se utiliza para declarar que una función devuelve una promesa. Dentro de una función async, podemos utilizar la palabra clave await para esperar a que se resuelva una promesa.
await: Se utiliza para pausar la ejecución de una función async hasta que una promesa se resuelva. Esto permite que el código asíncrono se comporte de manera más similar al código síncrono.
*/

// Como usar async await

async function getPosts() {
    try {
        const respuestaServidor = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await respuestaServidor.json();
        //console.log(posts);
    } catch(error) {
        console.log(error)
    }
}

getPosts();



const sePortaBien = true;
const verificarComportamiento = new Promise((resolve, reject) => {
    if (sePortaBien) {
        resolve(true)
    } else {
        reject('Te portaste muy mal')
    }
});

const estudioBien = false;
const verificarCalificaciones = new Promise((resolve, reject) => {
    if (estudioBien) {
        resolve(true)
    } else {
        reject('Te falto estudiar mas')
    }
});

async function pideTelefonoNuevo() {
    try {
        const promesas = await Promise.all([verificarComportamiento, verificarCalificaciones]);
        if (promesas[0] && promesas[1]) {
            console.log('Te comprare un telefono nuevo');
        }
    } catch(error) {
        console.log('Entro en el catch');
        console.log(error);
    }
}
pideTelefonoNuevo();

// const resp = await fetch('https://jsonplaceholder.typicode.com/posts'); -> Error porque no esta dentro de una funcion marcada como asincrona (async)


async function retornarNumero() {
    return 7;
}

const mostrarNumero = async () => {
    const numero = await retornarNumero();
    console.log('NUMERO::: ', numero);
};
mostrarNumero();