/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

'use strict';
let provincias = [];

fetch('https://www.el-tiempo.net/api/json/v2/provincias')
    .then((response) => response.json())
    .then((data) => {
        const result = data.provincias;
        for (const provincia of result) {
            provincias.push(provincia.NOMBRE_PROVINCIA);
        }
        console.log(provincias);
    })
    .catch((error) => console.error(error));
