// Tipos de datos
let name = "Kambcode Latam"; // string
const age = 3;  // number
const isColombian = true; // bolean
const colores = ["blanco", "negro", "verde"]
const isAdult = (age) => {  // function
    return age > 18;
}

// Objects, los objetos son un tipo de dato mixto
const dog = {
    name: "Firulais",
    age: 5,
    color: "negro",
    raza: "criollo",
    estaVacunado: true, // true | false
}

// Puedo ver todo mi objeto
console.log("Objeto dog: ", dog);
// Puedo consultar solo una propiedad de mi objeto
console.log("Nombre de el perro", dog.name);

let product = {
    name: "celular",
    identificador: 2323,
    color: ["negro", "verde", "blanco", "gris"],
    marca: "iphone",
    cantidadStock: 150,
    precio: 5000000,
    descuento: 10, // 10%
    disponibleEntregaInmediata: true, // true || false
}

console.log("Marca de el producto", product.marca);

// reto, si el prodcuto esta disponible para entrega inmediata
// vamos a imprimir "Lo recibirás hoy"
// si no, vamos a imprimir "Lo recibirás despues"

if (product.disponibleEntregaInmediata === true) {
    console.log("Lo recibirás hoy");
} else {
    console.log("Lo recibirás despues");
}

// Operaciones con los objetos

// 1. Puedo sobreescribir una propiedad
product.marca = "xiaomi";
// 2. Puedo agregar una propiedad
product.sePuedefinanciar = false; 
// 2. Puedo quitar una propiedad
delete product.identificador;
console.log("Nuevo producto", product);
