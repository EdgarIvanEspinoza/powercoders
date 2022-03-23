/* ################
 * ## Pirámide 4 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir
 * una variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a
 * continuación se ha tomado como referencia una altura de 4:
 *
 * - Figura:
 *
 *        * --> La relación entre altura y espacios sería "altura - 1".
 *       ** --> La relación entre altura y espacios sería "altura - 2".
 *      *** --> La relación entre altura y espacios sería "altura - 3".
 *     **** --> La relación entre altura y espacios sería "altura - 4".
 */

'use strict';

// Establecemos una variable que indique la altura de la pirámide.
const height = 6;

// Creamos un bucle que se repita tantas veces como lineas queramos,
// es decir, tantas veces como la altura.
for (let lines = 0; lines < height; lines++) {
    // Declaramos una variable que almacenará el contenido de cada linea.
    let lineContent = '';

    // Bucle para los espacios.
    for (let spaces = height - 1 - lines; spaces > 0; spaces--) {
        lineContent += ' ';
    }

    // Bucle para los asteriscos.
    for (let asterisk = lines + 1; asterisk > 0; asterisk--) {
        lineContent += '*';
    }

    // Imprimimos la línea por consola.
    console.log(lineContent);
}
