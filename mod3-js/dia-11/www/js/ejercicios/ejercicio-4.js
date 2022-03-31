/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Obtener un array con los todos personajes. Debe existir la posibilidad
 * de filtrar por "status" y por "species", así que lo ideal será agregar
 * a la función asíncrona dichos parámetros. Puedes asignarles como valor
 * por defecto un string vacío para evitar problemas: (status = '', species = '')
 *
 * ¡No utilizar el método filter!
 *
 * De nuevo necesitarás la ayuda de los query strings. En este caso: "page",
 * "status" y "species". Ejemplo: "?page=2&status=alive&species=alien".
 *
 *  - status: "alive", "dead", "unknown".
 *
 *  - species: "human", "alien".
 *
 *
 * API: https://rickandmortyapi.com/
 *
 */

'use strict';

let charStatus = 'dead';
let species = 'human';

const getCharacters = async (charStatus, species) => {
    try {
        // Obtenemos el response.
        let response = await fetch(
            `https://rickandmortyapi.com/api/character?status=${charStatus}&species=${species}`
        );

        // Transformamos la propiedad body del response en un objeto JavaScript.
        let data = await response.json();

        // Obtenemos el nº de páginas.
        const { pages } = data.info; // const pages = data.info.pages;

        // Creamos un array para almacenar los personajes y aprovechamos
        // para almacenar los resultados actuales.
        const characters = data.results;

        // Recorremos todas las páginas.
        for (let i = 2; i <= pages; i++) {
            // Obtenemos el response de la página actual.
            response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${i}&status=${charStatus}&species=${species}`
            );

            // Traducimos el body.
            data = await response.json();

            // Pusheamos EL CONTENIDO del array de resultados.
            characters.push(...data.results);
        }

        console.log(characters.map((char) => char.name));
    } catch (error) {
        console.error(error);
    }
};

getCharacters(charStatus, species);
