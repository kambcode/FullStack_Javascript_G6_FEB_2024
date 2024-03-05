// document.write("Este texto se agregó por medio de JS ")

// Esto es un comentario en JS

// Tipos de datos
    // 1. String: este es un tipo de dato para almacenar texto, Ejemplos
        // "Camilo Montoya"
        // "Kambcode"
        // 'Kambcode'
        // 'Es es el modulo de JS'
        // "25.99 USD"
    // 2. Number: tipo de dato numerico
        // 32
        // -25
        // 1.35 -> El decimal siempre se pone con punto
        // 0.00002
        // 2025223342342
    // 3. Boolean
        // true  -> Si / verdadero
        // false  -> No / falso

// VARIABLES:
// Declaramos (creamos) una variable llamada precio

var precio;
precio = 22;
var costoDeEnvio = 10;
var nombreProducto = "Audifonos azules retroiluminados";

document.write(nombreProducto);
document.write("<br>");

document.write("Precio de el producto: ", precio);
document.write("<br>");

document.write("Costo de envio ", costoDeEnvio);

nombreProducto = "Nuevo producto";
document.write("<br>", nombreProducto, "<br>");

// Yo puedo operar datos y operar variables
    // suma +
    // resta -
    // multiplicación *
    // division /
// document.write(16 + 2);
// document.write(16 / 2);

// var costoTotal = 25 + 10;
var costoTotal = precio + costoDeEnvio;
document.write("Costo total: ", costoTotal);

var costoTotalX2 = costoTotal * 2;
document.write("<br> Costo total X 2: ", costoTotalX2);

// Podemos imprimir alertas
// alert("Esto es una alerta");

var nombreUsuario = prompt("Esta es una alerta. Por favor escribe tu nombre");
var edad = prompt("Escribe tu edad");

document.write('<h3 class="title"> Nombre usuario: </h3>', nombreUsuario);
document.write("<h3> Edad: </h3>", edad);
var edadX2 = edad * 2;
document.write("<p> Tu edad multiplicada por dos es: </p>", edadX2 );



