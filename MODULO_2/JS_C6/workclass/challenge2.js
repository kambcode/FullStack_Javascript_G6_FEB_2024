// Reto 2 es 
// crear una función que calule el 
// valor de un producto + el envio

function calcPrecioTotal (precioProducto, precioEnvio) {
//La función debe retornar precioProducto + PrecioEnvio
    const total = precioProducto + precioEnvio;
    return total;
    // return precioProducto + precioEnvio;
}

const envio1 = calcPrecioTotal(1200, 200);
console.log("Costo total 1" , envio1);


const envio2 = calcPrecioTotal(3200, 220);
console.log("Costo total 2" , envio2);
