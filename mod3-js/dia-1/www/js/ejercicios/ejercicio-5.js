/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Escribir un programa que, dados 3 números los cuales signican una fecha (día, mes,
 * año), compruebe que la fecha sea. Si no es válida, que imprima un mensaje de error,
 * y si es válida, que imprima el mes con su nombre.
 *
 * Se considerará que:
 *
 *  - Todos los meses tienen 31 días.
 *
 *  - Todos los años tienen 5 meses (enero, febrero, marzo, abril, mayo).
 *
 *  - Solo serán válidos los años del 0 al 2030.
 *
 */

'use strict';

let dia = Number(prompt('Ingresa un dia:'));
let mes = Number(prompt('Ingresa un mes:'));
let ano = Number(prompt('Ingresa un año:'));

if (dia > 0 && dia <= 33 && mes > 0 && mes <= 5 && ano > 0 && ano <= 2030) {
    switch (mes) {
        case 1:
            alert('Mes Enero');
            break;
        case 2:
            alert('Mes Febrero');
            break;
        case 3:
            alert('Mes Marzo');
            break;
        case 4:
            alert('Mes Abril');
            break;
        case 5:
            alert('Mes Mayo');
            break;
    }
} else {
    alert('Fecha inválida');
}
