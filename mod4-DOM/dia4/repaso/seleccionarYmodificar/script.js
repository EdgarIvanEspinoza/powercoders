"use strict"


// SELECCIONAR ELEMENTOS
// document.querySelector("CUALQUIER SELECTOR DE CSS") <- la primera coincidencia (un elemento)
// document.quewrySelctorAll("CUALQUIER SELECTOR  ") <-todas las coincidencias (lista de elementos)


// EJEMPLOS
// Etiqueta
const h1 = document.querySelector("h1")
console.log(h1)

const enlace = document.querySelector("a")

const parrafos = document.querySelectorAll("p")
console.log(parrafos)


// Clase

const primerEspecial = document.querySelector(".clase")
console.log(primerEspecial)

const especiales = document.querySelectorAll(".clase")
console.log(especiales)


// ID

const primeraSeccion = document.querySelector("#id")
console.log(primeraSeccion)



//////////////////////////////////////

// MODIFICAR ELEMENTOS

//// CONTENIDO

//// Texto

primerEspecial.textContent = "este texto se ha modificado con JavaScript"

console.log(h1.textContent)


//// HTML

parrafos[0].innerHTML = "Este párrafo ha sido modificado con JavaScript. <strong>Interpreta el HTML</strong>"



////////////////////////////////

// ATRIBUTOS

//// Añadir

///// Si no lo tiene, se lo pone
h1.setAttribute("lang", "es")

primeraSeccion.setAttribute("hidden", true)

///// Si lo tiene, lo cambia
enlace.setAttribute("href", "http://jujel.com")

//// Leer

console.log(enlace.getAttribute("href"))


//// Comprobar si tiene

console.log(h1.hasAttribute("lang"))

console.log(enlace.hasAttribute("title"))


//// Quitar atributo

h1.removeAttribute("lang")

primeraSeccion.removeAttribute("hidden")



//// Atributos personalizados (dataset)

h1.dataset.personalizado = "algo"

h1.dataset.personalizado += " otro"

h1.dataset.personalizado = "['rojo', 'azul', 'verde']"

console.log(h1.dataset.personalizado)
console.log(h1.dataset.personalizado2)




/////////////////////

// CLASES

//// Añadir

h1.classList.add("titulo");

h1.classList.add("cabecera")
h1.classList.add("principal")

primerEspecial.classList.add("nueva")


//// Quitar

h1.classList.remove("cabecera")

primerEspecial.classList.remove("clase")

console.log(primerEspecial)


//// Alternar (si la tiene la quita, si no la tiene, la pone)

primeraSeccion.classList.toggle("primera")
primeraSeccion.classList.toggle("primera")


//// Comprobar si tiene

console.log(h1.classList.contains("cabecera"))
console.log(h1.classList.contains("titulo"))


//// Reemplazar (solo aplica si tiene la original)

primerEspecial.classList.replace("nueva", "reemplazo")
h1.classList.replace("nueva", "reemplazo")



// Leer todas lasw clases de un elemento a la vez

console.log(h1.className)
console.log(primerEspecial.className)


// Cambiar todas las clases de un elemento a la vez

h1.className = "otras diferentes"

primerEspecial.className += " añadido"