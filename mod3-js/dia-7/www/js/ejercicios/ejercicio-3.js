/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que reciba como parámetro un array cualquiera y retorne
 * otro array con los elementos del primero en orden inverso.
 *
 * ¡No vale utilizar el método "reverse"!
 *
 */

'use strict';

let array = [4, 10, 7, 1, 2];

function elVolteador(array) {
    let array2 = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
    }
    return array2;
}
console.log(array);
console.log(elVolteador(array));
