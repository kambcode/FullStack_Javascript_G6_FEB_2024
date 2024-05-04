# Tarea 9

Haciendo uso de la api jsonplaceholder, se requiere hacer un programa que obtenga los primeros 5 posts de la url https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5.
Una vez se obtengan los primeros cinco posts, se deben obtener los comentarios de ese post de la siguiente url https://jsonplaceholder.typicode.com/posts/${postId}/comments
donde postId será cada id de los posts previamente obtenidos.

Nota: Se debe hacer uso de async / await. Pueden guiarse del ejercicio que hicimos en la clase 10 (repase-promesas.ks) en donde hacemos lo mismo pero con .then y .catch. No se olviden de encerrar todo
en un bloque try catch.