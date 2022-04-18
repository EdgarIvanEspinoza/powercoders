"use strict";

const lista = document.querySelector("ul")
console.log(lista)


// LOS HIJOS
console.log("Hijos")

const hijos = lista.children;
console.log(hijos)

//primer hijo

const primerHijo = lista.firstElementChild
console.log(primerHijo)

//Ultimo hijo
const ultimoHijo = lista.lastElementChild

console.log(ultimoHijo)


// HERMANOS
console.log("///")
console.log("HERMANOS:")

//Anterior
const hermanoAnterior = lista.previousElementSibling //Si usamos previousSibling cuantan los nodos de texto (incluidos saltos de linea)

console.log(hermanoAnterior)

//Siguiente
const hermanoSiguiente = lista.nextElementSibling

console.log(hermanoSiguiente)


// PADRE
console.log("///")
console.log("PADRE")

const padre = lista.parentElement

console.log(padre)



// Combinando

console.log("/////")

const textoElemento3 = lista.firstElementChild.nextElementSibling.nextElementSibling.firstChild

console.log(textoElemento3)

const titulo = lista.parentElement.parentElement.parentElement.firstElementChild.children[0]

console.log(titulo)


console.log(lista.children[2])

console.log(lista.querySelector("li:nth-child(3)"))

console.log(document.querySelector("ul li:nth-child(3)"))