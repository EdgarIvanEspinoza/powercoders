"use strict";

const titulo = document.querySelector("h1")
const search = document.querySelector("input")
const img = document.querySelector("img")



// LEER ATRIBUTOS
console.log(search.getAttribute("type"))
console.log(search.getAttribute("lang"))

console.log(img.getAttribute("src"))
console.log(img.getAttribute("alt"))


//COMPROBAR SI TIENE UN ATRIBUTO

console.log(titulo.hasAttribute("lang"))
console.log(img.hasAttribute("alt"))


// AÑADIR/MODFICAR ATRIBUTOS
//Si no lo tiene, se añade

//Primer parámetro el atributo, segundo el valor

titulo.setAttribute("lang", "es")

// Para booleanos, el segundo valor es true o false
search.setAttribute("disabled", true)


// Si lo tiene, se cambia

img.setAttribute("src", "https://i.3djuegos.com/juegos/15012/pok_mon_rpg__switch_/fotos/maestras/pok_mon_rpg__switch_-4729095.jpg")

img.setAttribute("alt", "Imagen de pokemos iniciales")


// QUITAR ATRIBUTOS

search.removeAttribute("disabled")

img.removeAttribute("height")


// AÑADIR ATRIBUTO SOLO SI NO LO TIENE

if(!img.hasAttribute("alt")){
  img.setAttribute("alt", "descripción no disponible")
}


if(!search.hasAttribute("autofocus")){
  search.setAttribute("autofocus", true)
}


////////////////////

// ATRIBUTOS DATA

const lista = document.querySelector("ul")
const elementos = lista.querySelectorAll("li")

// Leer

console.log(lista.dataset.fecha)

// Añadir

lista.dataset.autor =  "Zoe"

for(let i = 0; i < elementos.length; i++){
  elementos[i].dataset.index = i
}