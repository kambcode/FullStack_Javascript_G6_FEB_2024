const country = prompt("Escriba el pais de nacimiento");
// const country = prompt("Escriba el pais de nacimiento");
if (country === "colombia") {
    document.write("Eres colombiano");
} else if (country === "panama") {
    document.write("Eres panameño");
} else if (country === "venezuela") {
    document.write("Eres venezolano"); 
} else if (country === "peru") {
    document.write("Eres peruano"); 
} else {
    document.write("No conozco tu nacionalidad");
}
document.write("<br> FIN ");
// RETO
// Un programa que calcule el precio de entrada a un bar

// Tiene que preguntar el genero de la persona (male / female)
// preguntar la edad

// Los menores de 18 Años -> NO PUEDEN ENTRAR
// Las mujeres siempre entran gratis
// Los mayores de 18 Años -> Pagan un cover de $30.000

const age = Number(prompt("Escribe tu edad"));
const genre = prompt("Escribe tu genero (m/f)");

if (age < 18) {
    var errorMessage = "No puedes entrar";
    document.write(errorMessage);
} else if (genre === "f") {
    document.write("Entras gratis");
} else {
    document.write("Pagan un cover de $30.000");
}


// Reto 2
// Crear un programa que pida a el usuario un color de camiseta y una talla (S/M/L/XL)
// El programa debe decirle a el usuario cuantas camisetas hay disponibles
// de acuerdo a la siguiente tabla

// azules de talla L -> 4 camisetas
// azules de talla M -> 10 camisetas
// azules de talla S -> 6 camisetas
// amarillas de talla M -> 8 camisetas
// verdes de talla S -> 2 camisetas
// de los demas colores y tallas no hay camisetas disponibles

