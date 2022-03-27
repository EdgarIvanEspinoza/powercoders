/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * ¿Te suena el juego piedra, papel o tijera? Pues manos a la obra.
 *
 *      - Tu oponente será la computadora.
 *
 *      - El ganador se decide al mejor de 3.
 *
 *      - Almacena la puntuación del jugador y de la computadora
 *        en el objeto Game como propiedades del mismo. Ejemplo:
 *
 *          const Game = {
 *              player: 0,
 *              computer: 0
 *          }
 *
 */

'use strict';

// En este objeto almacenaremos las puntuaciones.
const Game = {
    player: 0,
    computer: 0,
};

let GAMEOVER = false;

function piedraPapelOTijeras(player, cpu) {
    if (player === cpu) return 'empate';
    if (player === 'Piedra' && cpu === 'Papel') return 'cpu';
    if (player === 'Piedra' && cpu === 'Tijera') return 'player';
    if (player === 'Papel' && cpu === 'Piedra') return 'player';
    if (player === 'Papel' && cpu === 'Tijera') return 'cpu';
    if (player === 'Tijera' && cpu === 'Piedra') return 'cpu';
    if (player === 'Tijera' && cpu === 'Papel') return 'player';
}

function numberToChoice(value) {
    switch (value) {
        case 1:
            return 'Piedra';
        case 2:
            return 'Papel';
        case 3:
            return 'Tijera';
        default:
            return 'Numero invalido';
    }
}

while (!GAMEOVER) {
    let playerInput = Number(
        prompt(
            'El primero de 3 gana. Elije 1 para Piedra, 2 para Papel o 3 para Tijera'
        )
    );
    let playerChoice = numberToChoice(playerInput);
    let cpuChoice = numberToChoice(Math.ceil(Math.random() * 3));
    if (playerChoice !== 'Numero invalido') {
        let ganador = piedraPapelOTijeras(playerChoice, cpuChoice);
        console.log(playerChoice);
        console.log(cpuChoice);

        if (ganador === 'player') {
            Game.player++;
            alert(`Tu elijes ${playerChoice}. La computadora elijió ${cpuChoice}.
            Has ganado esta ronda. Llevas: ${Game.player} y el CPU: ${Game.computer}`);
        } else if (ganador === 'cpu') {
            Game.computer++;
            alert(`Tu elijes ${playerChoice}. La computadora elijió ${cpuChoice}.
            Has perdido. Llevas: ${Game.player} y el CPU: ${Game.computer}`);
        } else {
            alert(`Empate. Vamos otra vez.`);
        }
        if (Game.player === 3 || Game.computer === 3) GAMEOVER = true;
    } else {
        alert('Ingresa un valor númerico entre el 1 y el 3.');
    }
}
if (Game.player === 3) alert('FELICITACIONES! Has ganado.');
else alert('La Computadora gana y tu PIERDES!.');
