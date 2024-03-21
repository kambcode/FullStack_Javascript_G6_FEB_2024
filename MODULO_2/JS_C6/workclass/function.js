const persona1 = "Camilo";
const persona1age = 30; 

function calcularFechaNacimiento (age, fullName) {
    const birthDate = 2024 - age;
    console.log("Funcion:: Hola", fullName, "naciste en ", birthDate);
}

// Ejemplo de función Number("33")

// Puedo enviar datos directamenete a una función
calcularFechaNacimiento(10, "Camilo");
const persona2 = "Juan";
const persona2age = 24;
// Puedo usar variables para enviarselas a la función
calcularFechaNacimiento(persona2age, persona2);
const persona3 = "Pedro";
const persona3age = 46;
calcularFechaNacimiento(persona3age, persona3);




// const birthDate = 2024 - persona1age;
// console.log("Hola", persona1, "naciste en ", birthDate);

// const persona2 = "Juan";
// const persona2age = 24;

// const birthDate2 = 2024 - persona2age;
// console.log("Hola", persona2, "naciste en ", birthDate2);

// const persona3 = "Pedro";
// const persona3age = 43; 

// const birthDate3 = 2024 - persona3age;
// console.log("Hola", persona3, "naciste en ", birthDate3);