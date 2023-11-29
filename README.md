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
Aquí hay un enfoque simple para implementar esta clase:
```ruby
class CurrentDay
    def initialize
        @date = Date.today
        @schedule = MonthlySchedule.new(@date.year,
        @date.month)
    end

    def work_hours
        @schedule.work_hours_for(@date)
    end

    def workday?
        !@schedule.holidays.include?(@date)
    end
end
```
¿Cuál es el problema con este enfoque dado, cuando quieres probar el metodo workday?. Utiliza la inyección de dependencia aplicado al siguiente código.
```ruby
before do
    Date.singleton_class.class_eval do
        alias_method :_today, :today
        define_method(:today){Date.new(2020, 12, 16)}
    end
end

after do
    Date.singleton_class.class_eval do
        alias_method :today, :_today
        remove_method :_today
    end
end
```
¿Qué sucede en JavaScript con el DIP en este ejemplo?  
[RESPUESTA]
## Pregunta
(Para responder esta pregunta utiliza el repositorio y las actividades que has desarrollado de Introducción a Rails)
### 1
Modifique la lista de películas de la siguiente manera. Cada modificación va a necesitar que realice un cambio en una capa de abstracción diferente  
#### Modifica la vista Index para incluir el número de fila de cada fila en la tabla de películas.
Para hacer eso primero devemos ir a `/introdccion a rails/rails` y ahí vamos a `app/views/movies` ahi tenemos 
```
-# add to beginning of index.html.haml
%h1 All Movies

= form_tag movies_path, :id => "ratings_form", :method => :get do
  Include: 
  - @all_ratings.each do |rating|
    = label_tag  "ratings[#{rating}]", rating, class: 'form-check-label'
    = check_box_tag "ratings[#{rating}]", "1", @ratings_to_show.include?(rating), class: 'form-check-input', :id => "ratings_#{rating}"
  = submit_tag "Refresh", :id => "ratings_submit"


-# add to end of index.html.haml

= link_to 'Add new movie', new_movie_path


%table#movies.table.table-sm.table-striped
  %thead
    %tr
      %th Num 
      %th{class: "#{'hilite' if params[:sort] == "title"}"}
        = link_to "Movie Title", movies_path(:key_ratings => @ratings_to_show, :sort => "title"), id: "title_header"
      %th Rating
      %th{class: "#{'hilite' if params[:sort] == "release_date"}"}
        = link_to "Release Date", movies_path(:key_ratings => @ratings_to_show, :sort => "release_date"), id: "release_date_header"
      %th More Info
  %tbody
    - @movies.each do |movie|
      %tr
        %td= movie.id
        %td= movie.title 
        %td= movie.rating
        %td= movie.release_date
        %td= link_to "More about #{movie.title}", movie_path(movie)

= link_to 'Add new movie', new_movie_path
```
donde podemos notar que hay dos agregados nuevos, que son `%th Num` de `%head` que es de la tabla, para poner la columa, tambien falta el numero de la pelicula que tenemos implementado ya en `movie.rb` como su `id`, entonces en `%tbody` de la misma tabla, agregamos `%td= movie.id` y con eso, esto se puede apreciar de la siguiente manera.
![](/imagenes/1.png)
#### Modifica la acción Index del controlador para que devuelva las películas ordenadas alfabéticamente por título, en vez de por fecha de lanzamiento.
Para mostrar esto y explicarlo, primero mostraremos la seccion de la tabla en el `index.html.haml`: 
```

%table#movies.table.table-sm.table-striped
  %thead
    %tr
      %th Num 
      %th{class: "#{'hilite' if params[:sort] == "title"}"}
        = link_to "Movie Title", movies_path(:key_ratings => @ratings_to_show, :sort => "title"), id: "title_header"
      %th Rating
      %th{class: "#{'hilite' if params[:sort] == "release_date"}"}
        = link_to "Release Date", movies_path(:key_ratings => @ratings_to_show, :sort => "release_date"), id: "release_date_header"
      %th More Info
  %tbody
    - @movies.each do |movie|
      %tr
        %td= movie.id
        %td= movie.title 
        %td= movie.rating
        %td= movie.release_date
        %td= link_to "More about #{movie.title}", movie_path(movie)

= link_to 'Add new movie', new_movie_path

```
Aqui podemos notar que `= link_to "Movie Title", movies_path(:key_ratings => @ratings_to_show, :sort => "title"), id: "title_header"` nos da esa funcinolaidad porque ya se encuentra definido el `show.html.haml` de la siguiente manera: 
```
-# in app/views/movies/show.html.haml

%h2 Details about #{@movie.title}

%ul#details
  %li
    Rating:
    = @movie.rating
  %li
    Released on:
    = @movie.release_date.strftime("%B %d, %Y")

%h3 Description:
= link_to 'Edit info', edit_movie_path(@movie)
%br
= link_to 'Back to movie list', movies_path
%br
=link_to 'Add a Review', new_movie_review_path(@movie.id) 
%br
```
Para que la salida sea de la siguiente manera.
![](/imagenes/2.png)