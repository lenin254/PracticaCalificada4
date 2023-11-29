# PC4
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
