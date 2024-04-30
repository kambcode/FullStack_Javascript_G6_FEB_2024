# Tarea 7

- **Callbacks en Manejo de Datos:**

  Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

  Ejercicio:

  ```javascript
  function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  }
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });
  ```

- **Callbacks para Filtrar Elementos de un Arreglo:**

  Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.
  Ejercicio:

  ```javascript
  function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
  }

  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]
  ```
- **Callbacks: Filtrar Números Pares**

  Descripción:  Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.

  Pasos a seguir:
  
  - Crea una función llamada `filtrarPares` que acepte dos parámetros: un array de números y un callback.
  - Dentro de la función `filtrarPares`, utiliza el método filter para filtrar los números pares del array.
  - Llama al callback pasado como parámetro con el array de números pares como argumento.
  - Implementa un callback llamado `mostrarPares` que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
  
  ¡No olvides probar tu función llamando a filtrarPares y pasando mostrarPares como callback!


  ```javascript

  // Función para filtrar números pares y llamar a un callback con el resultado
  function filtrarPares(numeros, callback) {
    // Tu codigo acá
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    // Tu codigo acá
  }
  
  // Array de números de ejemplo
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares);
  ```

- **Async Callbacks: Garantizar orden de ejecucion de tareas**

  Descripción: Tengo un viaje pendiente para hacer a Corea del Sur saliendo desde Bogotá y haciendo escalas en Madrid (donde me voy a demorar 3 horas en el aeropuerto) y despues en Frankfurt (donde me voy a demorar 4 horas) hasta que finalmente llegaré a Corea despues de 8 horas.
  Se debe crear un programa en javascript usando callbacks que me garantice el siguiente orden de escalas previamente mencionado. Cada hora podemos representarlo como 1000 milisegundos.
  1. Bogota
  2. Madrid -> 3 horas (3000 milisegundos)
  3. Alemania -> 4 horas (4000 milisegundos)
  4. Corea -> 8 horas (8000 milisegundos)