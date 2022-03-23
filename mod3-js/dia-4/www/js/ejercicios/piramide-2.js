/**
 * ################
 * ## Pirámide 2 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    22
 *    333
 *    4444
 *    55555
 *
 */

'use strict';
/*
let altura = 30;

for (let i = 0; i < altura; i++) {
    let lineContent = '';
    for (let numero = i + 1; numero > 0; numero--) {
        lineContent += i + 1;
    }
    console.log(lineContent);
}*/

let altura = 5;

for (let i = 1; i < altura + 1; i++) {
    let palabras = '';
    for (let vueltas = i; vueltas > 0; vueltas--) {
        palabras += i;
    }
    console.log(palabras);
}


