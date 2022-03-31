/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Obtener un array con las series de las 5 primeras páginas.
 *
 * Para este ejercicio necesitarás agregar al final de la URL el query
 * param "page" de la siguiente forma "?page=2". Esto te permitirá moverte
 * por las distintas páginas simplemente cambiando el número de la misma.
 *
 * API: https://www.episodate.com/api
 *
 */

'use strict';
let topSeries = [];
const getSeries = async () => {
    try {
        for (let i = 1; i < 5; i++) {
            let response = await fetch(
                `https://www.episodate.com/api/most-popular?page=${i}`
            );
            let data = await response.json();
            const { tv_shows } = data;
            topSeries.push(...tv_shows.map((serie) => serie.name));
        }
        console.log(topSeries);
    } catch (error) {
        console.error(error);
    }
};

// Llamamos a la función asíncrona.
getSeries();
