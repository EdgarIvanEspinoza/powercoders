/* #################
 * ## Ejercicio 8 ##
 * #################
 *
 * Crea una calculadora con "switch" que opere con dos números. La calculadora
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
).toLowerCase();

if (Number.isFinite(num1) && Number.isFinite(num2)) {
    switch (option) {
        case 'sumar':
            alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
            break;
        case 'restar':
            alert(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
            break;
        case 'multiplicar':
            alert(num1 + ' x ' + num2 + ' = ' + num1 * num2);
            break;
        case 'dividir':
            if (num2 === 0) {
                alert('No se puede dividir entre cero');
            } else {
                alert(num1 + ' / ' + num2 + ' = ' + num1 / num2);
            }
            break;
        case 'potencia':
            alert(num1 + ' ^ ' + num2 + ' = ' + num1 ** num2);
            break;
        default:
            alert(
                'Error: tienes que escribir "sumar", "restar", "multiplicar", "dividir" o "potencia"'
            );
    }
} else {
    alert('Tienes que ingresar un valor numerico en los números.');
}
