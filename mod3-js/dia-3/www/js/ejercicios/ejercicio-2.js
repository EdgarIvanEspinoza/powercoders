'use strict';

/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Utiliza un bucle "do...while" para dar al usuario 3 intentos para acertar una contraseña.
 *
 * Deberíamos salir del bucle si:
 *
 *  - El usuario acierta la contraseña.
 *
 *  - Los intentos llegan a 0.
 *
 * Cuando salgamos del bucle muestra un mensaje indicando si ha acertado o no.
 *
 */

let contrasena;
let intentos = 3;

do {
    contrasena = prompt('Ingresa tu contrasena: ');
    if (contrasena === '123456') {
        alert('Contraseña correcta.')
        break
    } else {
        intentos --;
        alert('Contraseña incorrecta. Te quedan ' + intentos + ' intentos.')
    }
    
} while (intentos>0);

if (intentos != 0) {
    alert('Acceso concedido')
} else {
    alert('No has podido ingresar. Intenta luego.')
}