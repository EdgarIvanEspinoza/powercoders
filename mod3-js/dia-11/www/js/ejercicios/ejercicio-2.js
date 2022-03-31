/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
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
            'https://www.el-tiempo.net/api/json/v2/municipios'
        );
        let data = await response.json();
        console.log(
            data
                .filter((provincia) => provincia.NOMBRE_PROVINCIA === 'Lugo')
                .map((nombre) => nombre.NOMBRE)
                .sort()
                .reverse()
        );
    } catch (error) {
        console.error(error);
    }
};

getProvince();
