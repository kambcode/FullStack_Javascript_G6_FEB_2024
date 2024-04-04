const correctpassword = "123456abc";

const inputPassword = document.getElementById("input-pass");
const errorContainer = document.getElementById("errorMsg");
const pageContent = document.getElementById("pageContent");
const formContainer = document.getElementById("form");


function validatePassword() {
    // console.log("Contraseña correcta", correctpassword);
    // console.log("Contraseña de usuario", inputPassword.value);
    if (inputPassword.value === correctpassword) {
        console.log("Contraseña correcta");
        errorContainer.innerHTML = "";
        // Vamos a quitarle la clase hidden a el elemnto pageContainer
        pageContent.className = "";
        // Vamos a agregar la clase hidden a el elemnto formContianer
        formContainer.className = "hidden"
    } else {
        console.log("Incorrecta");
        errorContainer.innerHTML = "<b> Contraseña Erronea </b>";
    }
}