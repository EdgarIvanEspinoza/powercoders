/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeando por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío.
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá
 *        el contenido desde el primer paréntisis hasta el final del string.
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre.
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */

'use strict';

function parentesis(word) {
    const leftPar = word.indexOf('(');
    const rightPar = word.indexOf(')');
    if (leftPar >= 0 && rightPar >= 0) return word.split('(')[1].split(')')[0];
    if (rightPar >= 0) return word.split(')')[0];
    if (leftPar >= 0) return word.split('(')[1];
    return '';
}

console.log(parentesis('Hola (que tal'));
