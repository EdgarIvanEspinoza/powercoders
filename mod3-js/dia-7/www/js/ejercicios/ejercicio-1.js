/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea un programa que simule las tiradas de un dado:
 *
 *      - El dado debe generar en cada tirada un valor entre 1 y 6 (incluídos).
 *
 *      - En cada tirada mostrar el valor del dado y el total acumulado. Por ejemplo:
 *        "Tirada nº 4: ha salido un 6, tienes un total de 15 puntos"
 *
 *      - Cuando el total de tiradas supere o iguale los 100 puntos muestra
 *        un mensaje indicando que se han alcanzado los 100 puntos y que el juego
 *        ha finalizado.
 *
 */

'use strict';
let tirada = 0;
let score = 0; 

while (score < 100) {
    let numero = Math.ceil(Math.random()*6)
    score += numero
    tirada ++
    console.log(`Tirada nº ${tirada}: ha salido un ${numero}, tienes un total de ${score} puntos`);
}
console.log('GAME OVER');