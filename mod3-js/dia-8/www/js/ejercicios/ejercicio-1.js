/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
 *
 * - Muestra el objeto por medio de un "console.log".
 *
 * - Modifica el valor de la propiedad color y agrega la propiedad año de
 *   matriculación.
 *
 * - Utiliza un "confirm" para mostrar por consola las propiedades, o los
 *   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
 *   de lo contrario, se mostrarán los valores.
 *
 */

'use strict';

const coche = {
    modelo: 'gol',
    marca: 'vw',
    color: 'rojo',
};

console.log(coche);

coche.color = 'verde';
coche.matricula = 2007;

console.log(coche);

let entrada = confirm(
    'Presiona Aceptar para mostrar las propiedades de coche, o presiona Cancelar para mostroar los valores.'
);

if (entrada) console.table(Object.keys(coche));
else console.table(Object.values(coche));
