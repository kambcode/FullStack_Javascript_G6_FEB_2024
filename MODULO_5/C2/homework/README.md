# Tareas del modulo

Para este módulo no son necesias pruebas, para la revisión de esta tarea te basaras en el cumplimiento de las rubricas dadas en el enunciado comparando con el resultado esperado contenido en el folder llamado `/Solucion`.

## Tareas

Para esta tarea vamos a crear nuestro primero proyecto de NodeJS utilizando NPM para gestionar su creación y estructura, la tarea consiste en seguir los pasos dados hasta llegar al resultado esperado.

1. Genera mediante el comando para la inicialización de proyectos de NPM un proyecto con las siguientes caracteristicas
    - Nombre del paquete: proyecto-tarea
    - Versión: 1.2.0
    - Descripción: Esta es la descripción del proyecto
    - Script de entrada: init.js
    - Palabras clave: tarea - actividad - estudio
    - Autor: Tu nombre
    - Licencia: Por defecto
2. Luego de generado el proyecto, agrega la configuración al archivo de configuración para que se trabaje como un módulo, es decir, que utilice la sintaxis de modulos de ES6.
3. Instalamos el paquete `nodemon` como dependencia de desarrollo (Nodemon es un paquete que nos sirve para escuchar cuando nuestro proyecto cambia, es decir, cuando guardamos cambios y corre el código dado automaticamente)
4. Genera el comando `watch` en la configuración del proyecto para ejecutar `nodemon init.js`
5. Instala el paquete `chance` cuya documentación puedes encontrar [aquí](https://chancejs.com/) como dependencia
6. Instala el paquete `moment` cuya documentación puedes encontrar [aquí](https://momentjs.com/docs/#/use-it/) como dependencia

Hasta aquí tenemos listas las dependencias de nuestro proyecto, ahora vamos a implementar todas estas dependencias, lo que se busca es simular mediante el uso de la librería `chance` como vamos a diseñar el dashboard de una aplicación sobre motivación personal en cuanto a la creación de habitos, por tanto se busca generar un dashboard con las siguientes caracteristicas

-   Que salude al usuario, es decir, que tenga un mensaje de bienvenida
-   Que le indique al usuario cuantos minutos y horas lleva vivo, es decir, cuanto ha pasado desde su fecha de nacimiento
-   Que le indique al usuario cuantos minutos y horas le faltan al día actual
-   Que tenga un mensaje que motive al usuario a usar el resto de su día de buena manera

Para solucionar estos requerimientos vamos a utilizar datos aleatorios obtenidos mediante la librería `chance`, debemos entonces investigar como podemos generar nombres de personas aleatorios y fechas de nacimiento.

Luego mediante la utilización de la librería `moment` podemos operar con las fechas actual y de cumpleaños del usuario para obtener el resto de información. Entonces se resultan los siguientes requerimientos

-   Genera un mensaje con la siguiente estructura: `Welcome {Nombre del usuario} ! How's your day going? We hope very good, its been ${Minutos desde el nacimiento} minutes since your birth which stands ${Horas desde el Nacimiento} hours, thats a very short time, however you managed to build a lot of great things. Amazing, congratulations!. Now, today you still have ${Minutos que le quedan al día} minutes which means ${Horas que le quedan al día} hours to continue creating amazing stuff, how would you like to continue?`
-   Realiza todas las operaciones necesarias de datos de fechas con `moment` y obten la fecha de nacimiento y nombre aleatorio utilizando `chance`
-   Expon el código resultado en el script configurado como `main` del proyecto que también debe estar configurado en el comando `watch`
