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
  