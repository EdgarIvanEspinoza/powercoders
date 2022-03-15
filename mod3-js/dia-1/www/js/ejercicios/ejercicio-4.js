/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribir un programa que, dados tres valores, se indique cual es el mayor
 * de ellos.
 *
 */

'use strict';

let num_a = prompt('Ingresa el valor de A: ');
let num_b = prompt('Ingresa el valor de B: ');
let num_c = prompt('Ingresa el valor de C: ');

if (num_a > num_b && num_a > num_c) {
    alert('El valor ' + num_a + ' es el mayor.');
} else if (num_b > num_a && num_b > num_c) {
    alert('El valor ' + num_b + ' es el mayor.');
} else if (num_c > num_a && num_c > num_b) {
    alert('El valor ' + num_c + ' es el mayor.');
} else {
    alert('ERROR número inválido');
}
