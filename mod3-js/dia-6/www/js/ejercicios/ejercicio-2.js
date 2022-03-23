/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

'use strict';

const text = 'Tres tristes tigres tragan trigo en un trigal.';

const encuentraR = (text) => text.split('r').length - 1;

console.log(encuentraR(text));

const encuentraT = (text) => text.toLowerCase().split('t').length - 1;

console.log(encuentraT(text));

const cambiaE = (text) => text.replaceAll('e', 'i');

console.log(cambiaE(text));
