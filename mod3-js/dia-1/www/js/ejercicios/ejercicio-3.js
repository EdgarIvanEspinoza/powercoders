/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Escribir un programa que dados 2 valores de entrada imprima siempre la división
 * del mayor entre el menor.
 *
 * Bonus point: en caso de que el número menor sea 0 muestra un mensaje que indique
 *              que no se puede dividir entre 0.
 *
 */

'use strict';
let num_a = prompt('Ingresa el valor de A: ');
let num_b = prompt('Ingresa el valoor de B: ');
let numerador;
let denominador;

if (num_a > num_b) {
    numerador = num_a;
    denominador = num_b;
} else {
    numerador = num_b;
    denominador = num_a;
}

if (denominador <= 0) {
    alert('No se puede dividir entre 0');
} else {
    alert(numerador / denominador);
}
