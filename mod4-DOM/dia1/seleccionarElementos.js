"use strict";

// SELECCIONAR NO0DOS. MODO CLÁSICO (MÁS LÍO)

// Por etiqueta
console.log("Por etiqueta")

const titulo = document.getElementsByTagName("h1")
console.log(titulo) // Siempre devuelve una lista, aunque sea de un elemento o vacia

const parrafos = document.getElementsByTagName("p")
console.log(parrafos)

console.log("//////////////")

//Por ID
console.log("Por ID")

const seccion = document.getElementById("primera") //si no hay conincidencias, da null

console.log(seccion)

console.log("///////////////")

// Por clase
console.log("Por clase")

const importantes = document.getElementsByClassName("importante")

console.log(importantes) // Funciona igual que el de tags pero con clases

console.log("///////////////")

// SELECCION COMPLEJA
//quiero los párramos importantes de la segunda seccion

console.log("Seleccion compleja")


// Primero seleccionamos el padre
const segunda = document.getElementById("segunda")


// Dentro del padre seleccionamos lo que queremos
const importantesSegunda = segunda.getElementsByClassName("importante")

console.log(importantesSegunda)


console.log(" ")
console.log("/////////")
console.log(" ")

// MÉTODO MODERNO (querySelector / querySelectorAll)
console.log("Método moderno")

//Por etiqueta
console.log("Por etiqueta")

const titulo2 = document.querySelector("h1")
console.log(titulo2) // Devuelve SIEMPRE un elemento (si lo hay, si no, null)

const parrafo = document.querySelector("p")
console.log(parrafo) // La primera coincidencia

const parrafos2 = document.querySelectorAll("p") 
console.log(parrafos2) // SIEMPRE devuelve un lista

console.log("////")

//Por id
console.log("Por id")

const primera = document.querySelector("#primera")
console.log(primera)

console.log("////")

//Por clase
console.log("Por clase")

const importantes2 = document.querySelectorAll(".importante")
console.log(importantes2)


console.log("////")


//Seleccion compleja

console.log("Selección compleja")

const importantesSegunda2 = document.querySelectorAll("section#segunda > p.importante")

console.log(importantesSegunda2)