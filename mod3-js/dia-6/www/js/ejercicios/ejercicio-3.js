/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */

'use strict';

let text = 'hola que tal';

const elVolteador = (text) => text.split('').reverse().join('');

console.log(elVolteador(text));
