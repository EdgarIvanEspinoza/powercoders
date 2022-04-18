"use strict";

// CREAR ELEMENTOS

const titulo = document.createElement("h1");
const subtitulo = document.createElement("h2")
const header = document.createElement("header")


// Puedo modificar los elementos antes de añadirlos
titulo.textContent = "Crear elementos"
subtitulo.textContent = "Subtitulo"



//Añadir elementos a otros (al final)
header.append(titulo, subtitulo)

// Realmente también se pueden crear elementos directamente con innerHTML
// OJO, si lo hago con elementos que ya tienen contenido, BORRARÉ ese contenido

/* header.innerHTML = "<h1>Crear elementos</h1><h2>Esto es con innerHTML</h2>" */

console.log(header)




const body = document.querySelector("body")


// Añadir elementos al DOM
// Añadir elementos a otros que ya estén en el DOM

body.prepend(header) // prepend añade al principio del padre



//Podemos modificar los elementos después de añadirlos
// No recomendado. Solo si es necesario (cambios dinámicos).
titulo.style.color = "purple"



//Añadir un elemento ANTES de otro, sin ser al principio

//Necesito seleccionar el padre
const lista = document.querySelector("ul")

// Necesito seleccior el elemento de referencia
const tercero = lista.querySelector("li:nth-child(3)")




const newItem = document.createElement("li")
newItem.textContent = "Antes del 3"

// insertBefore

lista.insertBefore(newItem, tercero)




//// BORRAR UN ELEMENTO

const ultimo = lista.querySelector(":last-child")

console.log(ultimo)

//lista.removeChild(ultimo) //método antiguo

ultimo.remove()