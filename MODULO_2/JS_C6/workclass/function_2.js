// Vamos a crear una función que calcule el indice de masa corporal
// imc = peso / (altura * altura)

function calcImc (peso, altura) {
    // estas variables (alturaCuadrado y result)
    // solamente existen dentro de la función
    // NO se pueden usar afuera de ella
    const alturaCuadrado = altura * altura
    const result = peso / alturaCuadrado;
    return result;
    // Cualquier cosa que se ponga despues de return
    // No se va a ejecutar
    console.log("Esto Nunca se ejecuta");
}

const altura1 = 20;
const peso1 = 30;

const imc = calcImc(peso1, altura1);
// Ahora imc es igual a lo que retorna la funcion
// calcImc

console.log("IMC =", imc);
if (imc < 0.5) {
    console.log("El IMC es menor a  0.5")
} else {
    console.log("El IMC es mayor a  0.5")
}