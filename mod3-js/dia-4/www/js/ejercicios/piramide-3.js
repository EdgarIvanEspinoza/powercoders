/**
 * ################
 * ## Pirámide 3 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    12
 *    123
 *    1234
 *    12345
 *
 */

'use strict';

let altura = 5;

let lineContent = '';
for (let i = 0; i < altura; i++) {
    lineContent += i + 1;
    console.log(lineContent);
}
