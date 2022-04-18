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


//Función para generar las filas
function generateRow(city){

    //Crear la fila
    const tr = document.createElement("tr")

    //Crear la celda del nombre
    const th = document.createElement("th")

    //Poner el nombre
    th.textContent = city.name

    //Crear la celda de temp min
    const tdMin = document.createElement("td")

    //Poner la temp min
    tdMin.textContent = city.min

    //Asignamos la clase a la tem min
    tdMin.classList.add(getClass(city.min))

    //Crear la celda de temp max
    const tdMax = document.createElement("td")

    //Poner la temp max
    tdMax.textContent = city.max

    //Asignar clase a la temp max
    tdMax.classList.add(getClass(city.max))
  

    //Añadir las celdas a la fila
    tr.append(th, tdMin, tdMax)

    return tr
}

//Función para obtener la clase correspondiente
function getClass(temp){
    if(temp < 4){
        return "lower"
    } else if(temp < 20){
        return "low"
    } else if(temp < 30){
        return "medium"
    } else{
        return "high"
    }
}




//Crear el fragment para acumular filas
const fragment = document.createDocumentFragment()


//Por cada ciudad...
for(const city of cities){
    //generar su fila
    const row = generateRow(city)

    //Añadir la fila al fragment
    fragment.append(row)
}


//Seleccionar el tbody
const tbody = document.querySelector("tbody")


//Añadir el fragment al tbody
tbody.append(fragment)