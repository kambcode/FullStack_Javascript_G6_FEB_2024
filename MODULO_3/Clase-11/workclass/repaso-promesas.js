const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve(7);
    } else {
        reject('fallo')
    }
});

promise1.then(res => console.log(res)).catch(err => console.log(err));

function retornarNumero() {
    return new Promise((resolve, reject) => {
        reject('Error')
    });
}

retornarNumero().then(res => console.log(res)).catch(err => console.log(err));

const promesa1 = Promise.resolve(1);
const promesa2 = Promise.reject(2);
const promesa3 = Promise.resolve(3);

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(res => console.log(res))
    .catch(err => console.log(err));


// Programa para saber si un niño se porta bien y ademas tuvo buenas calificaciones
// Si hace ambas cosas le regalan un telefono
const sePortaBien = true;
const verificarComportamiento = new Promise((resolve, reject) => {
    if (sePortaBien) {
        resolve('se porto bien')
    } else {
        reject('Te portaste muy mal')
    }
});

const estudioBien = true;
const verificarCalificaciones = new Promise((resolve, reject) => {
    if (estudioBien) {
        resolve('estudio bien')
    } else {
        reject('Te falto estudiar mas')
    }
});

Promise.all([verificarComportamiento, verificarCalificaciones])
    .then(res => {
        console.log(res);
        if (res[0] && res[1]) {
            console.log('Te voy a comprar el telefono')
        }
    })
    .catch(err => console.log(err));


// Consumiendo informacion de un servidor en internet
/*fetch('https://jsonplaceholder.typicode.com/users?email=Rey.Padberg@karina.biz')
    .then(res => res.json())
    .then(res => console.log(res));*/

// RETO
// Obtener los primeros dos posts y despues obtener sus comentarios

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
        const postsFiltrados = res.filter(post => post.id === 1 || post.id === 2);

        const listaPromesas = postsFiltrados.map(post => fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`));

        return Promise.all(listaPromesas);
    })
    .then(respPosts => Promise.all(respPosts.map(respuesta => respuesta.json())))
    .then(posts => console.log(posts));

