var number = 1;

while(number <= 100) {
    document.write(number, "<br>");
    // number++; // Sumar uno a number
    // number += 1; // Sumar uno a number
    // number += 2; // Sumar dos a number
    number = number + 1;
}
document.write("FIN");

// RETO 1. Hacer un programa que imprima 
// los numeros de el uno al 50, 
// pero de 2 en 2.
// La salida de el programa debe ser
// 2, 4, 6, 8, 10 , 12 ...... 50

// RETO 2. Hacer un programa que imprima 
// los numeros de el uno al 50, 
// pero de 2 en 2 de forma descendente.
// La salida de el programa debe ser
// 50, 48, 46, 44 .... 2

document.write("<h2>Solución de el reto 2</h2>");
var numberA = 50;

while ( numberA >= 2 ) {
    document.write(numberA, "<br>");
    numberA = numberA - 2;
}

document.write("FIN")
