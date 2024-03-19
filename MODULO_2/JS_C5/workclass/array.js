// Tipos de datos

// string 
const fullName = "Kambcode latam";
// number
const age = 3;
// boolean
const isAvalibale = true; // false;  age === 3 --> Boolean

// Array -> arreglos
// Ejemplo una variable que tiene una lista de productos
const stringArray = [ "leche", "pan", "arroz", "peras" ];
console.log("Mi lista de compras", stringArray);

const years = [ 2000, 2023, 2024 ];
console.log("Arreglo de tipo numerico", years);

const mixedArray = [ "kambcode", 3, true, "latam", false, 4, 60.2 ];

const emptyArray = []; // lista o arreglo vacio

// Utilidades de los arreglos
// 1. como saber cuantos elementos tiene un arreglo
let shoppingList = [ "leche", "pan", "arroz", "lentejas", "manzanas", "peras" ];
console.log("Mi lista de compras", shoppingList);
console.log("Cantidad de elementos en la lista de compras", shoppingList.length);

// 2. Para agregar elementos a un array usamos el metod .push()
shoppingList.push("uvas");
console.log("Mi lista de compras", shoppingList);
shoppingList.push("queso");
shoppingList.push("jamón");
console.log("Mi lista de compras", shoppingList);

console.log("Cantidad de elementos en la lista de compras", shoppingList.length);

// 3. Podemos consultar un elemento de la lista en particular 

const todoList = [ "hacer la tarea", "lavarme los dientes", "dormir" ];
const totalElements = todoList.length; // 3
console.log("------------------");
console.log(todoList);
console.log("Cantidad de elementos en TODOLIST", totalElements)
console.log("Primer elemento de todoList: ", todoList[0]);
console.log("Segundo elemento de todoList: ", todoList[1]);
console.log("Tercer elemento de todoList: ", todoList[2]);
console.log("Cuarto elemento de todoList: ", todoList[3]); // undefined

// 4. Podemos reemplzar un elemento de un array
todoList[1] = "acostarme"   // lavarme los dientes
console.log("--------------");
console.log("Mi nueva lista", todoList);

// 5. Podemos saber si el arreglo incluyye o no un elemento

console.log("El arreglo incluye 'dormir'? ", todoList.includes("dormir"));


