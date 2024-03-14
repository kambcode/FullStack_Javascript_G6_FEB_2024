var userPassword = prompt("Contraseña de inicio");

while(userPassword != "kambcode") { 
    // Este bloque de codigo
    // se ejecutará infinitas veces
    // mientras que la condición 
    // userPassword != "kambcode" sea verdadera
    console.log("Acceso denegado");
    userPassword = prompt("Contraseña de inicio");
}

document.write("FIN DE PROGRAMA");