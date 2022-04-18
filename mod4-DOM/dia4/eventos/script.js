"use strict"

const boton = document.querySelector("button")


function click(){
  console.log("has hecho click")
}

// Opción no recomendada:
//boton.onclick = click;


// Opción recomendada
// eventListener

// Asignar funciones con nombre

boton.addEventListener("click", click)

// Asignar funciones anónimas
boton.addEventListener("click", () => {console.log("click!")})


// Si la función tiene nombre, la podemos quitar
boton.removeEventListener("click", click)


////////////

const handleButtonMouseOver = () => {console.log("has pasado el ratón")}

boton.addEventListener("mouseover", handleButtonMouseOver)

boton.removeEventListener("mouseover", handleButtonMouseOver)




const html = document.querySelector("html")

html.addEventListener("click", () => {console.log("click en el html!")})