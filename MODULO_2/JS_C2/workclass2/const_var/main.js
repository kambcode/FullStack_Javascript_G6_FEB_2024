document.write("Esta linea esta en JS<br>");
var nombre = "Kambcode";
console.log("Valor de la variable nombre ", nombre);
nombre = "Camilo";
var peso = 70;
var altura = 1.74;
var alturaCm = altura * 100;

console.log("Valor de la variable nombre ", nombre);
console.log("Altura en cm ", alturaCm);

var imc = peso / (alturaCm*alturaCm);
document.write("Hola ", nombre, " tu IMC es de ", imc.toFixed(4), "kg/cm2");

// var vs const
// const se unsa para declarar constantes
// una constante es una variable que NO puede cambiar de valor
const nombreCompleto = "Camilo Montoya";
console.log(" El valor de nombreCompleto es ", nombreCompleto);
// nombreCompleto = "Kambcode";
// console.log(" El valor de nombreCompleto ahora es: ", nombreCompleto);

const myvariable = Number(prompt("Escribe tu edad"));
document.write("<br> Tu edad es ", myvariable);
// // Vamos a calcular la edad que tendra la persona en 10 años
// myvariable = myvariable + 10;
// document.write("<br> Tu edad en 10 años será ", myvariable);
