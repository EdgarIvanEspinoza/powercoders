/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "showInfo()" con los parámetros nombre y edad:
 *
 *      - La función deve devolver un string del tipo: "Eres Pablo y tienes 33 años". Recuerda
 *        que el nombre y la edad son parámetros, pueden variar en cada llamado.
 *
 *      - Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template
 *        strings" (template literals).
 *
 *      - Llama a la función tres veces pasándole argumentos distintos.
 *
 */

'use strict';

const showInfo = (nombre, edad) => `Eres ${nombre} y tienes ${edad} años.`;

console.log(showInfo('Ivan', 33));
console.log(showInfo('Joanna', 28));
console.log(showInfo('Daniel', 27));
