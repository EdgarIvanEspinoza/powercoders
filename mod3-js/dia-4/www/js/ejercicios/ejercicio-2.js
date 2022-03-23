/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza lo aprendido sobre funciones para reestructurar el ejercicio de la bomba.
 * Crea la función "deactivateBomb" con los parámetros "limit" y "bombCode":
 *
 *  - limit: nº de intentos que le daremos al usuario.
 *
 *  - bombCode: código de desactivación.
 *
 */

'use strict';

/**
 *
 * @param {Number} limit - Número de intentos que tendrá el usuario.
 * @param {Number} bombCode - Código de desactivación de la bomba.
 * @returns Boolean
 */
function deactivateBomb(limit, bombCode) {
    alert(bombCode);
    let entrada;

    for (let i = limit; i > 0; i--) {
        entrada = Number(
            prompt(
                'Dime un numero del 1 al 10 RAPIDO. Una BOMBA va a EXPLOTAR!!!!!!'
            )
        );
        if (entrada === bombCode) {
            alert('Ufff menos mal, número correcto.');
            break;
        }
        alert('NOP, que miedo. Parece que te quedan ' + (i - 1) + ' intentos.');
    }
    if (entrada != bombCode) {
        alert('KABOOOOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!!!!!!');
    } else {
        alert('Haz desactivado la Bomba correctamente!');
    }
}

deactivateBomb(5, Math.ceil(Math.random() * 10));
