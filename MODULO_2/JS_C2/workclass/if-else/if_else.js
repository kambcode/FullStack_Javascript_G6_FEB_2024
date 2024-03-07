// Cómo comparar variables
  // Igualdad ==
  // Igualdad exacta === (comparar que tengan el mismo valor y que tambien sean de el mismo tipo de dato)
  // Diferente !=
  // Mayor >
  // Menor <
  // mayor o igual >=
  // menor o igual <=

var numberA = 42;
var numberB = 15;

document.write("<br> numberA es mayor a numberB ? ", numberA > numberB);
document.write("<br> numberA es menor a numberB ? ", numberA < numberB);
document.write("<br> numberA es igual a numberB ? ", numberA == numberB);
document.write("<br> numberA es diferente a numberB ? ", numberA != numberB);
document.write("<br> Comaparacion de dos variables 2 == '2' ", 2 == "2");
document.write("<br> Comaparacion de dos variables 2 === '2' ", 2 === "2");

document.write("<h1>Vamos a crear una pagina que determine si el usuario tiene más de 18 años</h1>")

var age = Number(prompt("Escribe tu edad"));

// if (CONDICIÓN true / false) { }
if (age > 18) {
    // Esto se ejecuta solo si la condición es verdadera
    document.write("Usted tiene mas de 18 años");
    document.write("<h3> Tienes acceso a esta pagina </h3>");
} else {
    document.write("<h3> Debes tener mas de 18 años para entrar </h3>");
}

document.write("<br> FIN de programa");