/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un nuevo array cuyos elementos sean los mismos que los del array original
 * pero sumándoles 10.
 *
 */

'use strict';

const nums = [0, 23, 21, 13, 100];
console.log(nums);
const nuevosNums = nums.map((num) => num + 10);
console.log(nuevosNums);
