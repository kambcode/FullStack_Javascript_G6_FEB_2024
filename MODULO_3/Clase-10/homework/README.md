# Tarea 8

Hacer un programa que simule una peticion a un servidor, con delay de 2000 ms, donde obtenga una informacion de usuarios. Si el usuario esta logueado (isLogged) la promesa se resueve con los usuarios (users), si no se rechaza un mensaje diciendo "No estas logueado dentro de la app". Dentro de cada usuario hay una propiedad id de persona (personId) que servirá para obtener la informacion de cada persona, simulando otra peticion tambien con delay de 5000 ms que se resolvera con cada persona dentro de la lista persons.

Notas: 
- Usar Promise.all para la segunda peticion fake, es decir la que obtiene las personas, una vez se resuelva la primera (dentro del then).
- La promesa de obtener personas debe recibir como parametro un usuario

```javascript
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
    // ...aqui tu codigo
  });
}

function getPerson(user) {
  return new Promise((resolve) => {
    // ...aqui tu codigo
  });
}

```