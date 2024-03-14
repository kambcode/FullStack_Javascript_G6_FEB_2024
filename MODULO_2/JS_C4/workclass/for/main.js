// var number = 1;
// while(number <= 50) {
//     document.write(number, "<br>");
//     number++; // Sumar uno a number
// }
// // Este while se puede escribir asi:

for( var number = 1 ; number <= 50 ; number++ ) {
    document.write(number, "<br>");
}

document.write("TABLA DE EL 3 <br>");

for( var number = 1 ; number <= 10 ; number++ ) {
    const tableResult = number * 3;
    document.write( number, " * 3 es igual ", tableResult, "<br>");
    // var count = 1;
    // while ( count <= 3) {
    //     document.write("    Hola Mundo", count, "<br>");
    //     count ++;
    // }
    for( var count = 1; count <= 3; count ++) {
        document.write("    Hola Mundo", count, "<br>");
    }
}

document.write("FIN");