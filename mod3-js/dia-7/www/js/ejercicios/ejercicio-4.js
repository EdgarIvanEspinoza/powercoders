/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Ordena el siguiente array numérico de menor a mayor: [4, 10, 7, 1, 2]
 *
 * ¡No se puede usar el método sort()!
 *
 */

'use strict';

const nums = [4, 10, 7, 1, 2];

function bubbleSort(array) {
    let done = true;
    while (done) {
        done = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = true;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}
console.log(bubbleSort(nums));
