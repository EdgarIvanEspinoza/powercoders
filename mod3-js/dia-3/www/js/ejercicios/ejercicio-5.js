/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 */

'use strict';

let numero = Math.ceil(Math.random() * 10);
alert(numero);
let entrada;

for (let i = 5; i > 0; i--) {
    entrada = Number(
        prompt(
            'Dime un numero del 1 al 10 RAPIDO. Una BOMBA va a EXPLOTAR!!!!!!'
        )
    );
    if (entrada === numero) {
        alert('Ufff menos mal, número correcto.');
        break;
    }
    alert('NOP, que miedo. Parece que te quedan ' + (i - 1) + ' intentos.');
}
if (entrada != numero) {
    alert('KABOOOOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!!!!!!');
}
alert('Haz desactivado la Boma correctamente!');
