"use strict"

const elementos = document.querySelectorAll("li")

// COMRPOBAR SI TIENE UNA CLASE
console.log(
elementos[0].classList.contains("importante"))

console.log(elementos[0].classList.contains("grande"))


// LEER las clases
console.log(elementos[0].className)
console.log(elementos[2].className)


// AÑADIR clases
// Se peno a mayores, da igual lo que tenga (nunca se repite)

elementos[5].classList.add("grande")
elementos[7].classList.add("grande", "otra")


// SOBREESCRIBIR clases
// Se asigna lo que digamos, borrando las que tuviera de antes
elementos[9].className = "importante otra"



// QUITAR clases

elementos[2].classList.remove("grande")


// ALTERNAR clases
elementos[1].classList.toggle("grande")
elementos[1].classList.toggle("importante")

elementos[10].classList.toggle("otra")



// REEMPLAZAR una clase por otra
// Solo se va a poner si tenia la que estamos reemplazando

elementos[4].classList.replace("importante", "grande")
elementos[8].classList.replace("importante", "grande")
