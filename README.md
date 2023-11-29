# PC4
## Preguntas
### 1
Creamos el archivo `grep.js` agregando:
``` javascript
#!/usr/bin/env nodo

// La línea anterior es un shebang. En sistemas operativos o entornos tipo Unix,

// esto permitirá que el script se ejecute por node y así convertir este JavaScript

// archivo en un ejecutable. En otras palabras, para ejecutar este archivo, puede ejecutar

// lo siguiente desde tu terminal:

//

// ./grep.js args

// Si no tienes un sistema operativo o entorno tipo Unix, por ejemplo

// Windows sin WSL, puedes usar lo siguiente dentro de una terminal de ventana,

// como cmd.exe:

//

// node grep.js args

// // Lea más sobre shebangs aquí: https://en.wikipedia.org/wiki/Shebang_(Unix)
```
podemos notar que al ejecutar el script, solo ejecuta y no hace ninguna accion, esto es devido a que todavia no le agregamos una funcionalidad en sí  
Ahora buscamos recuperar los argumentos con `proccess.argv` (implementado en javaScript)
``` javascript
#!/usr/bin/env node

const fs = require('fs'); // fs es un módulo de Node.js que proporciona una API para interactuar con el sistema de archivos

const args = process.argv.slice(2); // process.argv es una matriz que contiene los argumentos de la línea de comandos

const regex = new RegExp(args[0]);  // RegExp es una clase que representa una expresión regular
```
Con esto el script tendria de entrad un argumento con expresiones regulares y ademas tendria la capacidad de interactuar con el sistema de archivos, solo quedaria agregarle la funcionalidad de poder buscar el argumento en el `archivo.txt` y asi impirmir en la consola con `console.log(MATCH);` y asi completar su funcionalidad.

### 2 
