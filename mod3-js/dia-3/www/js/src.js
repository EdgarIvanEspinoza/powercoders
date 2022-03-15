'use strict';

/**
 * ###########
 * ## While ##
 * ###########
 */

let count_A = 4;

while (count_A >= 0) {
    console.log(count_A);
    count_A--;
}

/**
 * ##############
 * ## Do While ##
 * ##############
 *
 * El "do...while" se repite como mínimo una vez aunque NO se cumpla la condición.
 *
 */

const count_B = 4;

do {
    console.log('Dentro del bucle');
} while (count_B < 3);
