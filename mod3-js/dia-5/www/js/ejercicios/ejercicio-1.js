/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */

'use strict';

const nums = [1, 3, 9, 14, 17, 22];

/* let count = 0;

console.log('while');
while (count < nums.length) {
    console.log(nums[count]);
    count++;
} */

/* console.log('for');
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
} */

let sumador = 0;
for (const num of nums) {
    sumador += num;
}
console.log(sumador / nums.length);

/* 
console.log('for of');
for (const num of nums) {
    console.log(num);
}

console.log('+1');
for (const num of nums) {
    console.log(num + 1);
}

console.log('+1 en otro array');
const array2 = [];
for (const num of nums) {
    array2.push(num + 1);
}
console.log(array2);

console.log('promedio');
let promedio = 0;
for (const num of nums) {
    console.log(num);
    promedio += num;
}
console.log(`El promedio es ${(promedio /= nums.length)}`);
 */
