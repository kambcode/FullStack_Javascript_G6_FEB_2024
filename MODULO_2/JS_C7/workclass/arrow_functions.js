// Tipos de datos
let name = "Kambcode Latam"; // string
const age = 3;  // number
const isColombian = true; // bolean

// // Functión normal
// function getImc (peso, altura) {
//     const imc = peso / (altura*altura);
//     return imc;
// }

// Arrow function
const getImc = (peso, altura) => { // function
    const imc = peso / (altura*altura);
    return imc;
}
console.log("name", name);
console.log("age", age);
const resultImc = getImc(70,178);
console.log("result getIMC", resultImc);