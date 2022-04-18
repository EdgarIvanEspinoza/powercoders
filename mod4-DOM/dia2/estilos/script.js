"use strict"

const titulo = document.querySelector("h1")
console.log(titulo)

// LEER ESTILOS
//Con la propiedad style solo vamos los estilos en linea (incluidos los añadidos por JS)

console.log(titulo.style.color)
console.log(titulo.style.fontFamily)

// Para ver realmente los estilos que tiene, usamos el métedod de window getComputedStyle
console.log(window.getComputedStyle(titulo).fontFamily)
console.log(window.getComputedStyle(titulo).color)
console.log(window.getComputedStyle(titulo).fontSize)



// ESTABLECER ETILOS

const subtitulo = document.querySelector("h2")

// Añadir propiedades
subtitulo.style.fontSize = "2rem"

//Establecer todo el valor de style (SOBREESCRIBE LO QUE HAYA)
subtitulo.style.cssText = "text-decoration: line-through; font-family: sans-serif"

//Añadir propiedades
subtitulo.style.color = "purple";