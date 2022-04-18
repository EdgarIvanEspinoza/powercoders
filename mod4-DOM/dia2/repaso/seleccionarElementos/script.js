"use strict";

// SELECCIONAR ELEMENTOS

//Un solo elemento (querySelector)
//Si hay varios, selecciona la primera coincidencia

// Por etiqueta

const titulo = document.querySelector("h1")
console.log(titulo)

const li = document.querySelector("li")
console.log(li)

const lista = document.querySelector("ul")
console.log(lista)


// Por clase

const importante = document.querySelector(".importante")
console.log(importante)

// Por ID

const unico = document.querySelector("#unico")
console.log(unico)

// Otros selectores

const root = document.querySelector(":root")
console.log(root)

const segundo = document.querySelector(":nth-child(2)")
console.log(segundo)

////// Podemos seleccionar de dentro de un elemento ya seleccionado
const primerLi = lista.querySelector(":first-child")
console.log(primerLi)



// Selectores complejos

const importanteSegunda = document.querySelector("ul:nth-of-type(2) li.importante")
console.log(importanteSegunda)




/////////////////////
console.log("//////////")

// Seleccionar varios elementos (querySelectorAll)

// Siempre devuelve una lista, aunque tenga solo un elemento o esté vacia

// Por etqieuta

const titulos = document.querySelectorAll("h1")
console.log(titulos)

const lis = document.querySelectorAll("li")
console.log(lis)

const listas = document.querySelectorAll("ul")
console.log(listas)


// Por clase

const importantes = document.querySelectorAll(".importante")
console.log(importantes)

//Por ID
//No tiene sentido


// Otros selectores

const primerosHijos = document.querySelectorAll(":first-child")
console.log(primerosHijos)


// Seleccionar dentro de un elemento

console.log(listas[1])
const primerosHijosSegunda = listas[1].querySelectorAll(":first-child")
console.log(primerosHijosSegunda)


// Selectores complejos

const importantesSegunda = document.querySelectorAll("ul:nth-of-type(2) li.importante")
console.log(importantesSegunda)