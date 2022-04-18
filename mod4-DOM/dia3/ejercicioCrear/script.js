"use strict";

/* 
Crear un objeto que tenga un nombre y un email.
Utilizar ese objeto para añadir al DOM un header que tenga como título el nombre
y como subtítulo el email
*/


const user = {
  name: "Zoe",
  email: "zoe.porta.garcia@hackaboss.com"
}

/*   <header>
    <h1>Zoe</h1>
    <h2>zoe.porta.garcia@hackaboss.com</h2>
  </header> */

  
  // CREAR ELEMENTOS
  const header = document.createElement("header")
const titulo = document.createElement("h1")
const subtitulo = document.createElement("h2")

//AÑADIR LOS TEXTOS
titulo.textContent = user.name;
subtitulo.textContent = user.email


//AÑADIR AL HEADER
header.append(titulo, subtitulo)



//SELECCIONAR ELEMENTO DEL DOM (BODY)
const body = document.querySelector("body")


// AÑADIR AL DOM (al body)
body.prepend(header)


///////////////////////////////////

const pageTitle = document.querySelector("title")

pageTitle.textContent = user.name



///////////////////////////////////

//// CON INNERHTML /////


// NOTA: lo estoy estoy haciendo en una section para no borrar todo lo demas de body al usar innerHTML
// En lugar de section debería ser body
const section = document.querySelector("section")

section.innerHTML = `<header><h1>${user.name}</h1><h2>${user.email}</h2></header>`