let shoppingList = [];

for (let counter = 1; counter <= 3; counter ++){
    const element = prompt("Ingresa algo a la lista de compras");
    shoppingList.push(element);
    console.log('Lista de compras', shoppingList);
}

document.write("Agregaste ", shoppingList.length, " elementos a la lista");

const cantidadElementosEnLista = shoppingList.length;
for(let element = 0; element < cantidadElementosEnLista; element++ ){
    document.write("<li>", shoppingList[ element ] ,"</li>");
}

// Para saber si al arreglo contiene un elemento. 
// usamos la funcion .includes()

console.log(" El arreglo contiene la palabla leche ?", shoppingList.includes("leche") );

if (shoppingList.includes("pan")){
    document.write("Tienes pan en tu lista de compras");
} else {
    document.write("NO tienes pan en tu lista de compras");
}
