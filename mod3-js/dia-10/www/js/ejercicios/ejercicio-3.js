/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * Documentación: https://www.el-tiempo.net/api
 *
 */

'use strict';

let municipiosLugo = [];
const lugoID = 27;
fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${lugoID}/municipios`)
    .then((response) => response.json())
    .then((data) => {
        const result = data.municipios;
        for (const municipio of result) {
            municipiosLugo.push(municipio.NOMBRE);
        }
        console.log(municipiosLugo);
    })
    .catch((error) => console.error(error));
