# Tarea 2: Colaboración en Repositorio Git

### Objetivo:

Practicar el manejo básico de Git y la colaboración en un proyecto compartido.

1. **Clonar el repositorio:** Vamos a clonar el repositorio colaborativo para todo el grupo:

```
git clone https://github.com/ejemplo/repo-ejemplo.git
```

2. **Crear una nueva rama:** Una vez que hayas clonado el repositorio, crea una nueva rama llamada utilzando tu nombre nombre-apellido-documento para trabajar en ella.
```
git checkout -b nombre-apellido-112234
``` 

3. **Agregando nuevos archivos a tu rama:** En tu rama debes crear una carpeta siguiendo lo siguiente estructura NOMBRE_APELLIDO_DOC_IDENTIDAD (recuerda evitar el uso de espacios y caracteres especiales como puntos y comas). En la carpeta que acabas de crear agregar un archivo README.md con tus datos básicos, por ejemplo: En el archivo readme incluye tus datos personales ``` Nombre completo - USUARIO_GIT_HUB ``` 

4. **Verificar los cambios:** Verifica el estado de los cambios utilizando el comando git status.

5. **Agregar y confirmar los cambios:** Agrega tus cambios al área de preparación (``` git add . ```) y crea un commit con los cambios en la nueva rama.

```
git add .
git commit -m "Agregada nueva funcionalidad"
```

6. **Sincronizar la nueva rama con el repositorio remoto:** Finalmente, sincriniza la nueva rama y los cambios realizados con el repositorio remoto.

```
git push origin nombre-de-tu-rama
```

7. **Crear un PR (Opcional)** Crea un Pull request (PR) de tu rama para integrarse con la rama principal (main) y comparte el link de tu Pull request con tus compañeros y docente por el chat de whatsapp
