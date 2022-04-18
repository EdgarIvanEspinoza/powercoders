"use strict";

// MODIFICAR ELEMENTOS

// Primero hay que seleccionar el elemento en cuestión

const titulo = document.querySelector("h1")


// PROPIEDAD TEXTCONTENT
//// Sirve para leer el texto...

console.log(titulo.textContent/* .indexOf("ele") */) //Es un string que podemos usar como cualquier otro


// y para modificarlo
titulo.textContent = "Texto modificado mediante JS"


// PROPIEDAD INNERHTML
// Parecido a textContent, pero nos sirve para meter HTML

const parrafo = document.querySelector("p")

console.log(parrafo.innerHTML)

parrafo.innerHTML = "Este párrafo tiene una parte <strong>importante</strong>"

console.log(parrafo)


// PROPIEDAD OUTERHTML

const subtitulo = document.querySelector("h2")

console.log(subtitulo.outerHTML)

subtitulo.outerHTML = "<aside> Ahora ya no es un subtitulo, es un aside </aside>"