const dog = {
    name: "Firulais",
    age: 5,
    color: "negro",
    raza: "criollo",
    estaVacunado: true, // true | false
    // saludar: function () {
    //     console.log("Hola soy firulais");
    // }
    saludar: () => {
        console.log("Hola soy firulais");
    }
}

console.log("Nombre del el perro", dog.name);
console.log("Edad del el perro", dog.age);
dog.saludar();


let product = {
    name: "celular",
    identificador: 2323,
    color: ["negro", "verde", "blanco", "gris"],
    marca: "iphone",
    cantidadStock: 150,
    precio: 5000000, // pesos
    descuento: 180000, // pesos
    disponibleEntregaInmediata: true, // true || false
    obtenerPrecioTotal: () => {
        const preciototal = product.precio - product.descuento;
        return preciototal;
    },
    isColorAvailable: (colorSolicitado) => {
        const colorDisponible = product.color.includes(colorSolicitado); // true | false
        return colorDisponible;
    }
}

const precioTotal = product.obtenerPrecioTotal();
console.log("El precio total de envio es ", precioTotal);

const dispoibleEnVerde = product.isColorAvailable("verde");
console.log("El producto esta disponible en verde ?", dispoibleEnVerde);

console.log("El producto esta disponible en rojo ?", product.isColorAvailable("rojo") );

// Reto 
// 1 Crear un objeto que se llame pelicula
// 2 tiene varias propiedades
// - nombre
// - año de lanzamiento
// - edadMinima -> numero 5, 15, 18 
// - función que se llame disponibleParaUsuario( edadUsuario ) => debe retornar si puedo ver la pelicula o no (false | true)



