# Tarea 10

Hacer un programa que simule una peticion a un servidor, con delay de 2000 ms, donde obtenga una informacion de usuarios. Si el usuario esta logueado (isLogged) la promesa se resueve con los usuarios (users), si no se rechaza un mensaje diciendo "No estas logueado dentro de la app". Dentro de cada usuario hay una propiedad id de persona (personId) que servirá para obtener la informacion de cada persona,  simulando otra peticion tambien con delay de 5000 ms.

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
```