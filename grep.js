#!/usr/bin/env node

const fs = require('fs'); // fs es un módulo de Node.js que proporciona una API para interactuar con el sistema de archivos

const args = process.argv.slice(2); // process.argv es una matriz que contiene los argumentos de la línea de comandos

const regex = new RegExp(args[0]);  // RegExp es una clase que representa una expresión regular





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

