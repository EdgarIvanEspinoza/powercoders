/* ################
 * ## Pirámide 1 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir
 * una variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a
 * continuación se ha tomado como referencia una altura de 4:
 *
 * - Figura 1:
 *
 *      😁
 *      😁😁
 *      😁😁😁
 *      😁😁😁😁
 */

'use strict';
let chara = '';
let cant = prompt('ingresa cantidad: ');

for (let i = 0; i < cant; i++) {
    chara += '😎';
    console.log(chara);
}
