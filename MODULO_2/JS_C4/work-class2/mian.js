const regularPayment = Number(prompt("Escribe el valor de la cuota"));
const totalMonths = Number(prompt("Escribe la cantidad de meses que tiene el crédito"));

let payment = 0;

for( let counter = 1; counter <= totalMonths ; counter++) {
    payment = payment + regularPayment;
    document.write("<br>Mes ", counter, ", cuota $", regularPayment, ", Total abonado $", payment );
}

document.write("<br>El pago total fue de ", payment);


let paymentSecondYear = regularPayment - 20;
if (totalMonths < 12) {
    document.write("<br>En el segundo año solo pagas ", paymentSecondYear)
}



document.write("<br>El pago total fue de ", payment);



