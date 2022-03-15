/* #################
 * ## Ejercicio 8 ##
 * #################
 *
 * Tenemos 3 equipos de baloncesto. Estos son los resultados de cada equipo
 * en los últimos 4 partidos:
 *
 *      - Equipo A: 35, 46, 29, 58
 *      - Equipo B: 46, 72, 26, 36
 *      - Equipo C: 38, 62, 47, 44
 *
 * Muestra por consola el equipo con la mejor media en estos cuatro partidos.
 * Debes mostrar el nombre del equipo y la media de dicho equipo.
 *
 */

'use strict';
const Equipo_A = (35 + 46 + 29 + 58) / 4;
const Equipo_B = (46 + 72 + 26 + 36) / 4;
const Equipo_C = (38 + 62 + 47 + 44) / 4;

if (Equipo_A > Equipo_B && Equipo_A > Equipo_C) {
    console.log(Equipo_A);
} else if (Equipo_B > Equipo_C) {
    console.log(Equipo_B);
} else {
    console.log(Equipo_C);
}
