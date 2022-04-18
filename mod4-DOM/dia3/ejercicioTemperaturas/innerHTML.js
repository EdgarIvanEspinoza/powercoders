"use strict";

/**
 * Completa la tabla de temperaturas tomando como referencia
 * este array de ciudades. Tendrás que usar las siguientes
 * clases para cambiar el color de fondo de cada temperatura.
 *
 *  - lower: temp. menor que 4 (fondo azul).
 *
 *  - low: temp. entre 4 y 20 (fondo verde).
 *
 *  - medium: temp. entre 20 y 30 (fondo naranja).
 *
 *  - high: temp. mayor de 30 (fondo rojo).
 *
 */

const cities = [
    {
        name: 'A Coruña',
        min: 17,
        max: 23,
    },
    {
        name: 'Ferrol',
        min: 15,
        max: 32,
    },
    {
        name: 'Lugo',
        min: -20,
        max: 31,
    },
    {
        name: 'Ourense',
        min: 18,
        max: 35,
    },
    {
        name: 'Pontevedra',
        min: 18,
        max: 29,
    },
];



//Funcion para generar el texto HTML de cada fila
function getRow(city){
  return `<tr><th>${city.name}</th><td class="${getClass(city.min)}">${city.min}</td><td class="${getClass(city.max)}">${city.max}</td></tr>`
}

//Variable en la que concateniar los strings de cada fila
let htmlString = "";

// Por cada ciudad...
for(const city of cities){

  //Genero la fila
  const row = getRow(city)

  //La concateno a las demás
  htmlString += row
}


//Función para obtener la clase
function getClass(temp){
  if(temp < 4){
    return "lower"
  }

  if(temp <20){
    return "low"
  }

  if(temp < 30){
    return "medium"
  }

  return "high"
}




// Selecciono el tbody
const tbody = document.querySelector("tbody")


// Asigno el string al innerHTML del tbody
tbody.innerHTML = htmlString