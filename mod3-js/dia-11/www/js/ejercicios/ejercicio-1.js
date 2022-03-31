/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todas las provincias de España.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';

const getProvince = async () => {
    try {
        let response = await fetch(
            'https://www.el-tiempo.net/api/json/v2/provincias'
        );
        let data = await response.json();
        const { provincias } = data;
        console.log(provincias.map((provincia) => provincia.NOMBRE_PROVINCIA));
    } catch (error) {
        console.error(error);
    }
};

getProvince();
