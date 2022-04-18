"use strict";


// DOM = Document Object Model

console.log("hello world")

const titulo = document.querySelector("h1")
console.log(titulo)



// Objeto window
// Ya hemos visto varios métodos de window, 
//pero se puede omitir la propia palabra window

console.log(window.console)

// window.prompt("")
// window.alert()
// window.confirm()

// window.setInterval()
// window.setTimeout


// PROPIEDADES DE WINDOW

console.log(window.innerHeight) //la altura del viewport
console.log(window.innerWidth) //el ancho del viewport

console.log(window.outerHeight) //el alto de la ventana
console.log(window.outerWidth)  //al ancho de la ventana


console.log(window.location) // Objeto con propiedades y métodos relacionados con la url actual

//window.location.reload() //Recarga la página

window.open("anuncio.html") // Abre una ventana nueva



// window.print() // abre el menú de impresión