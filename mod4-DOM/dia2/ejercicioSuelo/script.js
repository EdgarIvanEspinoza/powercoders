"use strict";
/* 

Crear un suelo de discoteca (maya de minimo 4 x 4 cuadrdos).
Cada cuadrado cambiará a un color aleatorio periódicamente

*/


function getRandomColor(){
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  return `rgb(${r}, ${g}, ${b})`
}


const cuadrados = document.querySelectorAll("div div")






function changeColors(){
  for(const cuadrado of cuadrados){
  cuadrado.style.background = getRandomColor()
}
}


changeColors()

setInterval(changeColors, 500)