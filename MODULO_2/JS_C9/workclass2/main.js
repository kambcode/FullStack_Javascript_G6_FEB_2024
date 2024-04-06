const button = document.getElementById("button1");
const title = document.getElementById("title");

const changeColor = () => {
    alert("Cambiar color"); 
    title.innerHTML = "Nuevo titulo";
    // // Desde de JS nosotros podemos forzar un cambio
    // // de estilos
    // title.style = "color: red;";  
    
    title.className = "titleRed";
}

// Esta es la mejor practica para interceptar el 
// evento click de un boton
button.addEventListener("click", changeColor );



// button.addEventListener("click", () => {
//     alert("Cambiar color")    
// });


// button.addEventListener("click", function () {
//     alert("Cambiar color")    
// });


// PREGUNTASS TIPO ENTREVISTA
2 == "2" // verdadero
2 === "2" // falso

// let number = 1;
let number = 2;

for (let index = 0; index < number; index++) {
    console.log(number);
}
console.log("FIN");

// 2
// 2
// "FIN"


let counter = 0;

function suma () {
    counter = counter + 2;
}

console.log(counter); // 0
suma();
console.log(counter); // 2
suma();
suma();
console.log(counter); // ¿?

"Hola Mundo"


let myArray = ["Kambcode", "latam"];
myArray.push(2024);

console.log(myArray); // ["kambcode", "latam", 2024]
console.log(myArray[1]); // "latam"
console.log(myArray[5]); // undefined















