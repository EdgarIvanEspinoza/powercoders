/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 */

'use strict';

const text = 'arepera';

function palindromo(text) {
    if (
        text.toLowerCase().replaceAll(' ', '') ===
        text.toLowerCase().replaceAll(' ', '').split('').reverse().join('')
    ) {
        return 'Es palíndromo';
    } else {
        return 'No es palindromo';
    }
}

console.log(palindromo(text));
