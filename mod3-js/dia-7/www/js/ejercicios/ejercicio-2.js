/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Algoritmo que calcule la letra del DNI:
 *
 * - El número debe ser entre 10000000 y 99999999.
 *
 * - Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
 *   ¿Qué ocurre cuando obtenemos un valor NaN? JavaScript lo considera un número. Busca una
 *   forma de comprobar que el valor es realmente numérico.
 *
 * - Debemos calcular el resto de la división entera entre el DNI y
 *   el número 23.
 *
 * - Según el resultado, de 0 a 22, le corresponderá una letra de las
 *   siguientes:  [T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E]
 *
 */

'use strict';

const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
];

let done = true;
do {
    done = false;
    let DNI = Number(prompt('Ingresa tu DNI'));
    if (DNI >= 10000000 && DNI <= 99999999 && !isNaN(DNI)) {
        console.log(DNI % 23);
        alert(letters[DNI % 23]);
        done = true;
    } else {
        alert('No ha introducido un número correcto. Vuelve a intentarlo.');
    }
} while (!done);
