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
**Ahora buscamos recuperar los argumentos con `proccess.argv` (implementado en javaScript)**
``` javascript
#!/usr/bin/env node

const fs = require('fs'); // fs es un módulo de Node.js que proporciona una API para interactuar con el sistema de archivos

const args = process.argv.slice(2); // process.argv es una matriz que contiene los argumentos de la línea de comandos

const regex = new RegExp(args[0]);  // RegExp es una clase que representa una expresión regular
```
Con esto el script tendria de entrad un argumento con expresiones regulares y ademas tendria la capacidad de interactuar con el sistema de archivos, solo quedaria agregarle la funcionalidad de poder buscar el argumento en el `archivo.txt` y asi impirmir en la consola con `console.log(MATCH);` y asi completar su funcionalidad.

### 2 
Para esto implementamos `Clases.js` de la siguiente manera (se agrego comentarios de los puntos pedidos en la practica):
```javascript
// Clase Pokémon
class Pokemon {
    constructor(HP, ataque, defensa) { //El constructor toma 3 parámetros (HP, ataque, defensa)
      //El constructor debe crear 6 campos (HP, ataque, defensa, movimiento, nivel, tipo). 
      //Los valores de (mover, nivelar, tipo) debe inicializarse en ("", 1, "").
      this.HP = HP;
      this.ataque = ataque;
      this.defensa = defensa;
      this.movimiento = "";
      this.nivel = 1;
      this.tipo = "";
    }
    //Implementa un método flight que arroje un error que indique que no se especifica ningún movimiento.
    flight() {
      if (this.movimiento === "") {
        throw new Error("No se especificó ningún movimiento.");
      }
    }
    //Implementa un método canFly que verifica si se especifica un tipo. Si no, arroja un error. 
    //Si es así, verifica si el tipo incluye ‘’flying’. En caso afirmativo, devuelve verdadero; si no, devuelve falso
    canFly() {
      if (this.tipo === "") {
        throw new Error("No se especificó ningún tipo.");
      }
      if (this.tipo.includes("volar")) {
        return true;
      } else {
        return false;
      }
    }
  }
  
// Clase Charizard que hereda de Pokémon
class Charizard extends Pokemon {
    constructor(HP, ataque, defensa, movimiento) { //El constructor toma 4 parámetros (HP, ataque, defensa, movimiento)
      //El constructor configura el movimiento y el tipo (para "disparar/volar") 
      //además de establecer HP, ataque y defensa como el constructor de superclase.
      super(HP, ataque, defensa);
      this.movimiento = movimiento;
      this.tipo = "disparar/volar";
    }

    //Sobreescribe el método fight . Si se especifica un movimiento, 
    //imprime una declaración que indique que se está utilizando el movimiento y devuelve el campo de ataque. 
    //Si no arroja un error. (implementa utilizando JavaScript ) 
    // ================= RESPUESTA =================
    fight() {
      if (this.movimiento !== "") {
        console.log(`Utilizando el movimiento: ${this.movimiento}`);
        return this.ataque;
      } else {
        throw new Error("No se especificó ningún movimiento.");
      }
    }
    // =============================================
  }
  
// Ejemplo de uso
const charizard = new Charizard(80, 100, 75, "Lanzallamas");

console.log(charizard.fight()); // Imprime "Utilizando el movimiento: Lanzallamas" y luego 100

```
En el codigo se puede apreciar lo pedido en la parctica, en la parte de RESPUESTA.
### 3

