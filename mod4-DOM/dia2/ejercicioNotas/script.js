"use strict";

/* 
// SOLO COLORES


// Seleccionar todos los td
const tds = document.querySelectorAll("td")




// Recorrer los tds
for(const td of tds){
  console.log(td.textContent)
  if(td.textContent < 5){
    td.style.color = "red"
  } else {
    td.style.color = "green"
  }
} */


//CON NOTAS FINALES

const filas = document.querySelectorAll("tr:not(:first-of-type)")


function setAvg(fila){
  const tds = fila.querySelectorAll("td")

  const lastIndex = tds.length - 1; // (3)

  let total = 0;

  for(let i = 0; i < lastIndex; i++){
    total +=  +tds[i].textContent; // Añadiendo un + a un string lo convierto  número. Tambien puedo usar Number() o parseInt()

    setColor(tds[i])
  }

  tds[lastIndex].textContent = Math.round(total/lastIndex);
  setColor(tds[lastIndex])

}


function setColor(td){
  if(td.textContent < 5){
    td.style.color = "red"
  } else {
    td.style.color = "green"
  }
}

for(const fila of filas){
  setAvg(fila)
}