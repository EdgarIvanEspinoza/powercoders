/* ################
 * ## Pirรกmide 1 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir
 * una variable que permita modificar la altura de la pirรกmide. Para el ejemplo expuesto a
 * continuaciรณn se ha tomado como referencia una altura de 4:
 *
 * - Figura 1:
 *
 *      ๐
 *      ๐๐
 *      ๐๐๐
 *      ๐๐๐๐
 */

'use strict';
let chara = '';
let cant = prompt('ingresa cantidad: ');

for (let i = 0; i < cant; i++) {
    chara += '๐';
    console.log(chara);
}
