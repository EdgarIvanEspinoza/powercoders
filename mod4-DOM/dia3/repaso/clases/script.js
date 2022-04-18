"use strict";
const html = document.querySelector("html")


// Una sola funcion (un solo boton)
// Toggle pone la clase si no la tiene y la queta si la tiene

function toggleMode(){
html.classList.toggle("dark")
}


////// Dos funciones (dos botones)


// Quitar la clase
function setLigthMode(){
/* html.classList.remove("dark")

///
html.classList.remove("night")


 */

/// Para quitar TODAS las clases en una linea
html.className = "" //Tambien 7vale para sustituir TODAS las clases por otras
}


//Poner la clase
function setDarkMode(){
  html.classList.add("dark")
}


///// Comprobar si está activado el modo oscuro

function isDark(){
  return html.classList.contains("dark")
}


function getMode(){
if(isDark()){
  return "dark"
} 

return "light"
}



// Aplicar una clase solo si está otra
// Reemplazar clases

function setNightMode(){
  html.classList.replace("dark", "night")
}