const inputName = document.getElementById("input-name");
const resultContainer = document.getElementById("result-container");


function sayHello () {
    const name = inputName.value;
    resultContainer.innerHTML = "Hola " + name;
    // resultContainer.innerHTML = "Hola " + inputName.value;
}