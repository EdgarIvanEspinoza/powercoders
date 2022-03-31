'use strict';

const getCharacters = async () => {
    try {
        // Obtenemos el response.
        let response = await fetch('https://rickandmortyapi.com/api/character');

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
                `https://rickandmortyapi.com/api/character?page=${i}`
            );

            // Traducimos el body.
            data = await response.json();

            // Pusheamos EL CONTENIDO del array de resultados.
            characters.push(...data.results);
        }

        console.log(characters);
    } catch (error) {
        console.error(error);
    }
};

// Llamamos a la función asíncrona.
getCharacters();
