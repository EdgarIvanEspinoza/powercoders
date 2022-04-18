"use strict";
const userInput = document.querySelector("#user")
const passInput =  document.querySelector("#pass")
const boton =document.querySelector("button")

// Leer una propiedad
console.log(boton.getAttribute("type"))
console.log(userInput.getAttribute("name"))


//Comprobar si tiene un atributo
console.log(userInput.hasAttribute("required"))
console.log(userInput.hasAttribute("autofocus"))
console.log(userInput.hasAttribute("name"))


// Añadir un atributo

userInput.setAttribute("lang", "es")

boton.setAttribute("disabled", true)

passInput.setAttribute("type", "text") //Si establecemos un atributo que ya tenía, lo cambia


//Quitar atributos

passInput.removeAttribute("required")
boton.removeAttribute("disabled")


//////
// ATRIBUTOS DATA

const p = document.querySelector("p")

console.log(p.getAttribute("data-year"))

//leer
console.log(p.dataset.year)

console.log(p.dataset)

//asignar
p.dataset.year = 1850

//añadir
p.dataset.author = "Zoe"

