// OBJETOS
// Los objetos en JavaScript son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas.
// Comparados con otros tipos de datos como strings, números y booleanos, los objetos pueden contener múltiples valores y métodos.

// Sintaxis
const objeto = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['perro', 'gato'],
    saludar: () => {
        console.log('Hello world')
    },
    objetoInterno: {
        a: 1,
        b: 'hola'
    }
}

// La forma antigua de hacerlo
let persona = {};
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 18;
persona.nacionalidad = 'colombiana';

// Acceder a las propiedades: objeto.propiedad.?.?.?
console.log(objeto.edad);
console.log(objeto.animales);
console.log(objeto.objetoInterno.b);
objeto.saludar();
console.log(persona);
objeto.profesion = 'ingeniero';
console.log(objeto);

// Otras formas de crear objetos
// Object.create
const infoPersona = {
    nombre: 'Ana',
    apellido: 'Suarez',
    edad: 20,
    direccion: 'Calle # 1',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion.nombre);
infoProfesion.profesion = 'diseñadora';
infoProfesion.experiencia = 7;
infoProfesion.cargo = 'jefe';
console.log(infoProfesion.profesion);
console.log(infoProfesion.experiencia);
console.log(infoProfesion.cargo);
console.log(infoProfesion);


// Object.assign
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

// resultado -> { a: 1, b: 3, c: 5, d: 6 }
const resultado = Object.assign({}, objeto1, objeto2, objeto3);
console.log(resultado);
resultado.w = 5;
console.log(resultado);


// Otros metodos de los objetos

// Object.freeze
const personaFreeze = {
    nombre: 'Cesar',
    edad: 30,
    mascotas: ['perro', 'gato']
}

Object.freeze(personaFreeze);
personaFreeze.nombre = 'Pedro'; // No tiene efecto porqueno se permite modificar una propiedad
personaFreeze.edad = 21;
personaFreeze.direccion = 'Calle # 2'; // No tiene efecto porqueno se permite agregar una propiedad
// Si se agrega porque no se modifica el valor de la variable como tal (no modifica la referencia en memoria),
// solo agrego un elemento mas
personaFreeze.mascotas.push('tortuga');
personaFreeze.mascotas.pop();
personaFreeze.mascotas = []; 
console.log(personaFreeze);

// Object.keys
console.log(Object.keys(personaFreeze));
for (let i = 0; i < Object.keys(personaFreeze).length; i++) {
    const element = Object.keys(personaFreeze)[i];
    console.log(element);
}

console.log('--------------------')

// Object.values
console.log(Object.values(personaFreeze));
for (let i = 0; i < Object.values(personaFreeze).length; i++) {
    const element = Object.values(personaFreeze)[i];
    console.log(element);
}

console.log('--------------------')

// Object.entries
console.log(Object.entries(personaFreeze));
for (let i = 0; i < Object.entries(personaFreeze).length; i++) {
    const element = Object.entries(personaFreeze)[i];
    console.log(element);
}


// Referencia vs valor en objetos
const object1 = { a: 1, b: true };
const object2 = { a: 1, b: true };
console.log(object1 === object2);

const object3 = object1; // Comparten la misma referencia object3 -> object1 -> { a: 1, b: true }
console.log(object1 === object3);
console.log(object2 === object3);

// Que pasa si cambio algun dato de una propiedad o agrego una nueva en object3? afecta al object1?
object3.a = 78;
console.log(object3.a);
console.log(object1.a);

// Como lo evito?
/* 
    const object1 = { a: 1, b: true };
    const object4 = { a: 1, b: true };
*/
const object4 = Object.create(object1); // Aca ya no comparten la misma referencia
object4.a = 45;
console.log(object4.a);
console.log(object1.a);