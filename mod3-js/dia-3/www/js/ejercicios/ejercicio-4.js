/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Escribe un programa que permita al usuario concatenar elementos en un string.
 * El programa finalizará cuando el usuario introduzca el string "fin", y se
 * mostrará por consola el contenido de la variable.
 *
 */

'use strict';
let palabra = '';
let nuevapalabra = '';

while (nuevapalabra !== 'fin') {
    nuevapalabra = prompt('Ingresa una palabra: ').toLowerCase();
    if (nuevapalabra !== 'fin') {
        break;
    }
    palabra += ' ' + nuevapalabra;
}

console.log(palabra);
