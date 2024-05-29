const OPCION = ['piedra', 'papel', 'tijera'];
let puntajeJugador = 0;
let puntajePc = 0;


// Función para que la pc elija de forma aleatoria una opción. 
function obtenerEleccionPC() {
    const RESPUESTAPC = Math.floor(Math.random() * OPCION.length);
    return OPCION[RESPUESTAPC];
}

// Función de elección y resultado para cada ronda
function jugarRonda(respuestaJugador, RESPUESTAPC) {
    if (respuestaJugador === RESPUESTAPC) {
        return "Empate";
    }

    switch (respuestaJugador) {
        case 'piedra':
            return (RESPUESTAPC === 'tijera') ? 'Ganar' : 'Perder';
        case 'papel':
            return (RESPUESTAPC === 'piedra') ? 'Ganar' : 'Perder';
        case 'tijera':
            return (RESPUESTAPC === 'papel') ? 'Ganar' : 'Perder';
        default:
            return 'Sólo podés elegir entre las opciones disponibles';
    }
}

// Actualizo el tablero
function actualizarResultado(RESULTADO) {
    if (RESULTADO === 'Ganar') {
        puntajeJugador++;
    } else if (RESULTADO === 'Perder') {
        puntajePc++;
    }
}

// Jueego:

puntajeJugador = 0;
puntajePc = 0;
const RONDAS = Number(prompt('¿Cuántas rondas te bancás?'));

// Se juega la cantridad de rondas que eligió el usuario
for (let i = 0; i < RONDAS; i++) {
    let respuestaJugador = prompt('¿Piedra, papel o tijera?').toLowerCase();

    // Chequeo que ingrese un valor correcto
    while (!OPCION.includes(respuestaJugador)) {
        respuestaJugador = prompt('Sólo se puede elegir entre las opciones indicadas: piedra, papel o tijera').toLowerCase();
    }

    // Muestro mensaje de eleccion de pc y resultado de la ronda
    const RESPUESTAPC = obtenerEleccionPC();
    alert('La computadora eligió: ' + RESPUESTAPC);

    const RESULTADO = jugarRonda(respuestaJugador, RESPUESTAPC);
    alert(RESULTADO === 'Empate' ? 'Uff, eligieron lo mismo' : RESULTADO === 'Ganar' ? 'Zarpado, quién te conoce Cortana!' : 'Perdiste, sorry');

    actualizarResultado(RESULTADO);
    alert('Puntaje: Jugador: ' + puntajeJugador + ' | PC: ' + puntajePc);
}

// Cómo termina el partido
if (puntajeJugador > puntajePc) {
    alert('Si Siri estuviese acá, te cantaría una serenata. Ganaste!');
} else if (puntajeJugador === puntajePc) {
    alert('Deportivo empate.');
} else {
    alert('Estemm, te ganó la máquina');
}

// Vovler a jugar sin refrescar la página. 
if (confirm('¿Hacemos otra vuelta?')) {
    jugar();
} else {
    alert('Gracias por jugar, nos vemos prontos.');
}