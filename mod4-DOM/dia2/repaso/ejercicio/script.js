"use strict"
const titulo = document.querySelector("h1")
const imagen = document.querySelector("img")


// Cambiar titulo

titulo.textContent = "Zoe"


// Poner la imagen

// Mediante atributos

/* imagen.setAttribute("src", "https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg")
imagen.setAttribute("alt", "Imagen de pikachu");
imagen.setAttribute("height", 300)
*/


// Mediante propiedades
imagen.src = "https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg"
imagen.alt = "Imagen de pikachu"
imagen.height = 300;