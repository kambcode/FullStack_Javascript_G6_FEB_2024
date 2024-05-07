// Tarea 4.1 Clase 8
// - Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
const estudiantes = [
    {
        nombre: "Ana",
        edad: 20,
        promedio: 85,
        genero: "Femenino",
        carrera: "Ingeniería Civil",
        ciudad: "Bogotá",
    },
    {
        nombre: "Juan",
        edad: 22,
        promedio: 78,
        genero: "Masculino",
        carrera: "Medicina",
        ciudad: "Medellín",
    },
    {
        nombre: "María",
        edad: 21,
        promedio: 90,
        genero: "Femenino",
        carrera: "Administración de Empresas",
        ciudad: "Cali",
    },
    {
        nombre: "Pedro",
        edad: 23,
        promedio: 82,
        genero: "Masculino",
        carrera: "Derecho",
        ciudad: "Barranquilla",
    },
    {
        nombre: "Laura",
        edad: 24,
        promedio: 88,
        genero: "Femenino",
        carrera: "Arquitectura",
        ciudad: "Cartagena",
    },
    {
        nombre: "Carlos",
        edad: 20,
        promedio: 75,
        genero: "Masculino",
        carrera: "Ingeniería de Sistemas",
        ciudad: "Santa Marta",
    },
    {
        nombre: "Sofía",
        edad: 22,
        promedio: 95,
        genero: "Femenino",
        carrera: "Psicología",
        ciudad: "Pereira",
    }
];

const obj = {
    a: 1,
    b: 2,
    c: 3
};
const nuevoObjeto = {...obj, d: 6};
//console.log(nuevoObjeto);

const avg = estudiantes.map(estudiante => estudiante.promedio);
const higherAvg = Math.max(...avg);// [1,2,3,...] -> (1,2,...)
//console.log(avg);

let promedioMasAlto = 0;
/*for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    if (estudiante.promedio > promedioMasAlto) {
        promedioMasAlto = estudiante.promedio;
    }
}*/


estudiantes.forEach(estudiante => {
    if (estudiante.promedio > promedioMasAlto) {
        promedioMasAlto = estudiante.promedio;
    }
})
//console.log(promedioMasAlto);


// Tarea 7 Clase 9
// Punto 4.
const salidaBogota = (callback) => {
    setTimeout(() => {
        console.log('Salgo desde Bogotá');
        callback();
    }, 5000);
};

const escalaMadrid = (callback) => {
    setTimeout(() => {
        console.log('Estoy en Madrid');
        callback();
    }, 3000);
};

const escalaFrankfurt = (callback) => {
    setTimeout(() => {
        console.log('Estoy en Frankfurt');
        callback();
    }, 4000);
};

const llegadaCorea = () => {
    setTimeout(() => {
        console.log('Llegué a Corea');
    }, 6000);
};



//const resultado = nombreFuncion(param1); // 1, 'dfdfgfdg', true/false, {...}, [...], null, undefined
/*salidaBogota(function() {
    escalaMadrid(function() {
        escalaFrankfurt(function() {
            llegadaCorea
        });
    });
});*/



function retornarNumeroRandom() {
    return new Promise(resolve => {
        resolve(Math.random() * 10);
    });
}

retornarNumeroRandom()
    .then(numero => {
        //console.log(numero);
        //console.log('Tarea 2...');
    })
    .catch(err => console.log(err));


// Ejercicio tarea 8 promesas, then y catch

const isLogged = true;

const users = [
  {
    id: 1,
    role: 'USER',
    personId: 10
  },
  {
    id: 2,
    role: 'USER',
    personId: 11
  }
];

const persons = [
  {
    personId: 10,
    name: 'Rodrigo',
    lastname: 'Lopez'
  },
  {
    personId: 14,
    name: 'Jaime',
    lastname: 'Diaz'
  },
  {
    personId: 15,
    name: 'Leonardo',
    lastname: 'Benitez'
  },
];

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged) {
                resolve(users);
            } else {
                reject('No estas logueado dentro de la app')
            }
        }, 2000);
    });
}
  
function getPerson(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const person = persons.find(person => person.personId === user.personId);
            resolve(person);
        }, 5000);
    });
}

/*getUsers()
    .then(users => {
        const promiseUsers = users.map(user => getPerson(user));
        return Promise.all(promiseUsers);
    })
    .then(persons => console.log(persons.filter(person => person)));
    .catch()*/

// Tarea 9

async function test() {
    return [1,2,3];
}

async function mostrarData() {
    try {
        // throw new Error('Cualquier error');
        const data = await test();
        //console.log(data);
        //console.log('Tarea 2...');
    } catch(err) {
        //console.log(err)
    }
}

mostrarData();



async function getPosts() {
    try {
        const respuestaServidor = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
        const posts = await respuestaServidor.json(); // Javascript object notation
        //console.log(posts);
    } catch(err) {
        //console.log(err);
    }
}

getPosts();


// Callbacks vs Promises vs async/await

// callbacks
const tarea1 = () => console.log('Ejecutando tarea 1...');

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 3...');
        callback();
    }, 1000);
};

const tarea4 = () => console.log('Ejecutando tarea 4...');

/*tarea1();
tarea2(() => {
    tarea3(() => {
        tarea4();
    });
});*/

// Promise con .then y .catch
function generatePromise(number, milliseconds) {
    return new Promise((resolve) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Task ${number}...`);
            }, milliseconds);
        } else {
            resolve(`Task ${number}...`);
        }
    });
}
/*const promesaTarea1 = generatePromise(1, 5000);
const promesaTarea2 = generatePromise(2, 0);
const promesaTarea3 = generatePromise(3, 1000);
const promesaTarea4 = generatePromise(4, 0);*/

/*promesaTarea1
    .then(res => {
        console.log(res);
        return promesaTarea2;
    })
    .then(res => {
        console.log(res)
        return promesaTarea3;
    })
    .then(res => {
        console.log(res);
        return promesaTarea4;
    })
    .then(res => console.log(res));*/


// async/await

const task1 = () => generatePromise(1, 5000);
const task2 = () => generatePromise(2, 2000);
const task3 = () => generatePromise(3, 5000);
const task4 = () => generatePromise(4, 1000);

async function executeTasks() {
    console.log(await task1());
    console.log(await task2());
    console.log(await task3());
    console.log(await task4());
}

executeTasks();