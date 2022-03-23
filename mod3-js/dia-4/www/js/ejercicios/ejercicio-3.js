/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que imprima X resultados aleatorios de una
 * quiniela 1 X 2. Ejemplo, si le decimos que imprima 14 resultados:
 *
 *      Resultado 1: 1
 *      Resultado 2: X
 *      Resultado 3: 2
 *      (...)
 *      Resultado 14: 2
 *
 */

'use strict';

function quiniela(imprimir) {
    for (let i = 1; i <= imprimir; i++) {
        let resultado = Math.ceil(Math.random() * 3);
        if (resultado === 3) resultado = 'x';
        console.log(`Resultado ${i}: ${resultado}`);
    }
}
quiniela(14);
