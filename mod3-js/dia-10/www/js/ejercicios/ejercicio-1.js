/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea una función "alarm" que reciba como argumento un número de
 * segundos.
 *
 * La función deberá mostrar por consola una cuenta atrás hasta llegar
 * a 0, en ese momento muestra un mensaje que indique que la alarma está
 * sonando.
 *
 */

'use strict';

function alarm(sec) {
    let interval = setInterval(() => {
        if (sec >= 0) {
            console.log(sec);
            sec--;
        } else {
            console.log(`ALARM!!!`);
            clearInterval(interval);
        }
    }, 1000);
}

alarm(5);
