"use strict";


// CREAR



/* const main = document.querySelector("main")

main.innerHTML += "<p>hola</p>" */

const p = document.createElement("p")
p.textContent = "parrafo creado con JS"

const enlace = document.createElement("a")
enlace.textContent = "Google"
enlace.setAttribute("href", "http://google.com")
console.log(enlace)


// AÑADIR AL DOM
// (tengo que añadirlo a algo que ya esté en el DOM)

const body = document.querySelector("body")
const main = document.querySelector("main")

//// Añadir al final

body.append(p)

//////// Si añadimos un elemento que ya está en el DOM 
//////// en otro sitio, SE MUEVE
main.append(p)


//// Añadir al principio

body.prepend(enlace)




// CREAR Y AÑADIR EN BUCLE


const lista = document.querySelector("ul")


//// Para no tocar demasiado el DOM, trabajamos con fragment

const fragment = document.createDocumentFragment()


for(let i = 0; i < 10; i++){
  const li = document.createElement("li")
  li.textContent = "elemento " + i
  
  fragment.append(li)
}



lista.append(fragment)



//Añadir elementos por el medio

//// Seleccionamos los hermanos/el hermano que irá después

const hermanos = lista.children

const newLi = document.createElement("li")
newLi.textContent = "Antes del 5"

lista.insertBefore(newLi, hermanos[5])



// ELIMINAR 

hermanos[2].remove()