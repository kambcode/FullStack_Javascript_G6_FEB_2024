
// Reto 2
// Crear un programa que pida a el usuario un color de camiseta y una talla (S/M/L/XL)
// El programa debe decirle a el usuario cuantas camisetas hay disponibles
// de acuerdo a la siguiente tabla

// azules de talla L -> 4 camisetas
// azules de talla M -> 10 camisetas
// verdes de talla S -> 2 camisetas
// de los demas colores y tallas no hay camisetas disponibles


const size = prompt("Escrible la talla de camiseta"); // L
const color = prompt("Escribe el color"); // verde

if (color === "azul" && (size === "l" || size === "L")) {
    document.write("4 camisetas disponibles");
} else if (color === "azul" && (size === "m" || size === "M")) {
    document.write("10 camisetas disponibles");
} else if (color === "verde" && (size === "l" || size === "L")) {
    document.write("2 camiseta disponibles");
} else  {
    document.write("Agotado!!"); 
}
document.write("<br>"); 
// Otra Solución: 
// la funcion .toLowerCase() convierte un string en minusculas
const sizeLower = size.toLowerCase(); // el valor de size pero convertido a minuscula
if (color === "azul" && sizeLower === "l") {
    document.write("4 camisetas disponibles");
} else if (color === "azul" && sizeLower === "m") {
    document.write("10 camisetas disponibles");
} else if (color === "verde" && sizeLower === "l") {
    document.write("2 camiseta disponibles");
} else  {
    document.write("Agotado!!"); 
}
