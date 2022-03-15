/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "while" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "while" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

'use strict';

let contador = 0;

while (contador < 100) {
    console.log(contador);
    contador += 10;
}

while (contador >= 0) {
    console.log(contador);
    contador -= 25;
}