/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado el array [3, 4, 13, 5, 6, 8], muestra por consola qué numeros son pares
 * y qué números son impares.
 *
 * Haz lo mismo pero en este caso indica qué números son primos y cuales no.
 *
 * Por último, crea un nuevo array en el que los valores sean el doble del array
 * original.
 *
 */

'use strict';

const nums = [3, 4, 13, 5, 6, 8];

/* console.log('Números pares');
for (const num of nums) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
 */
/* 
console.log('Números primos');
for (const num of nums) {
    let primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(`El numero ${num} es primo`);
    }
} 
*/
/* 
console.log('Array de doble valor');
const array2 = [];
for (const num of nums) {
    array2.push(num * 2);
}
console.log(array2); 
*/
