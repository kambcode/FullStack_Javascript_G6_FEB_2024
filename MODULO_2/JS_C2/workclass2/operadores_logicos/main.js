var paisDeOrigen = prompt("Escribe el pais en que naciste");
var edad = Number(prompt("Escribe tu edad")); 

if (paisDeOrigen === "colombia" && edad < 18) {
    // Si es colombiano y es menor de edad
    // paisDeOrigen === "colombia" y edad < 18
    // ambas condiciones tienen que cumplirse
    document.write("<br>Tienes que pagar $8.000 entre semana");
}else {
    document.write("<br>Tienes que pagar $15.000 entre semana");
}

// Vamos a calcular el costo de entrada los domingos
if (paisDeOrigen === "colombia" || edad > 64 || edad < 18) {
    document.write("<br>Tienes que pagar $5.000 los domingo");
} else {
    document.write("<br>Tienes que pagar $10.000 los domingo");
}