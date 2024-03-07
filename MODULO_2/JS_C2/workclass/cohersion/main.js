document.write("<h3> Como redondear un numero </h3>");
var age = 58;
var middleAge = age / 3;
var middleAgeRounded = middleAge.toFixed(2);
// Si tienen un numero lo pueden redondear con la función 
// .toFixed()
// Ejemplo, para redondear a un decimal usamos middleAge.toFixed(1)
// Ejemplo, para redondear a dos decimales usamos middleAge.toFixed(2)
document.write("La mitad de la edad es: ", middleAgeRounded, " años de edad");

// COHERCIÓN DE DATOS
var number = 15 + 20;
document.write("<br> La suma de 15 + 20 es: ", number);

var fullName = "Camilo" + "Montoya";
document.write("<br> La suma de 'Camilo' + 'Montoya' es: ", fullName);

var year = "20" + "24";
document.write("<br> La suma de dos strings '20' + '24' es: ", year);

var userAgeText = prompt("Escribe tu edad");
// para convertir un texto en numero, podemos usar la función Number()
var userAgeNumber = Number(userAgeText);
// var userAge = Number(prompt("Escribe tu edad"));
var userAgePlusTen = userAgeNumber + 10;
document.write("<br> Edad de el usuario: ", userAgeNumber);
document.write("<br> Edad de el usuario + 10: ", userAgePlusTen);



