/* #################
 * ## Ejercicio 7 ##
 * #################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 *
 */

'use strict';
let num1 = Number(prompt('Ingresa el primer número:'));
let num2 = Number(prompt('Ingresa el segundo número: '));
let option = prompt(
    'Quieres "sumar", "restar", "multiplicar", "dividir" o "potencia"'
);
if (option === 'sumar') {
    alert(num1 + num2);
} else if (option === 'restar') {
    alert(num1 - num2);
} else if (option === 'multiplicar') {
    alert(num1 * num2);
} else if (option === 'dividir') {
    alert(num1 / num2);
} else if (option === 'potencia') {
    alert(num1 ** num2);
} else {
    alert('Error');
}
