const OPCION = ['piedra', 'papel', 'tijera'];

class JuegoPiedraPapelTijera {
    constructor() {
        this.puntajeJugador = 0;
        this.puntajePc = 0;
        this.rondas = 0;
    }

    // Función para que la pc elija de forma aleatoria una opción. 
    obtenerEleccionPC = () => {
        const RESPUESTAPC = Math.floor(Math.random() * OPCION.length);
        return OPCION[RESPUESTAPC];
    }

    // Función de elección y resultado para cada ronda
    jugarRonda = (respuestaJugador, RESPUESTAPC, callback) => {
        let resultado;
        if (respuestaJugador === RESPUESTAPC) {
            resultado = "Empate";
        } else {
            switch (respuestaJugador) {
                case 'piedra':
                    resultado = (RESPUESTAPC === 'tijera') ? 'Ganar' : 'Perder';
                    break;
                case 'papel':
                    resultado = (RESPUESTAPC === 'piedra') ? 'Ganar' : 'Perder';
                    break;
                case 'tijera':
                    resultado = (RESPUESTAPC === 'papel') ? 'Ganar' : 'Perder';
                    break;
                default:
                    resultado = 'Sólo podés elegir entre las opciones disponibles';
            }
        }

        if (typeof callback === 'function') {
            callback(resultado, respuestaJugador, RESPUESTAPC);
        }

        return resultado;
    }

    // Actualizo el tablero
    actualizarResultado = (resultado) => {
        switch (resultado) {
            case 'Ganar':
                this.puntajeJugador++;
                break;
            case 'Perder':
                this.puntajePc++;
                break
        }
    }

    // Jueego:
    jugar = () => {
        this.puntajeJugador = 0;
        this.puntajePc = 0;

        // Cantidad de rondas a jugar:
        this.rondas = Number(prompt('¿Cuántas rondas te bancás?'));

        // Pido respuestas:
        for (let i = 0; i < this.rondas; i++) {
            let respuestaJugador = prompt('¿Pieda, papel o tijera?').toLowerCase();

            while (!OPCION.includes(respuestaJugador)) {
                respuestaJugador = prompt('Sólo se puede seleccionar entre las opciones disponibles: ').toLowerCase();
            }

            const RESPUESTAPC = this.obtenerEleccionPC();
            alert('La pc eligió: ' + RESPUESTAPC);

            let resultado = this.jugarRonda(respuestaJugador, RESPUESTAPC, (resultado, respuestaJugador, RESPUESTAPC) => {
                alert(resultado == 'Empate' ? 'Uff eligieron lo mismo' : resultado == 'Ganar' ? 'Zarpado, quien te conoce Cortana!' : 'Perdiste, sorry');
                alert('Jugador: ' + respuestaJugador + ' PC: ' + RESPUESTAPC);
            });


            this.actualizarResultado(resultado);
            alert('Puntaje: Jugador: ' + this.puntajeJugador + ' PC: ' + this.puntajePc);
        }

        if (this.puntajeJugador > this.puntajePc) {
            alert('Si Siri estuviese acá, te cantaría una serenata');
        } else if (this.puntajeJugador == this.puntajePc) {
            alert('Deportivo empate');
        } else {
            alert('Te ganó Optimus Prime');
        }

        if (confirm('¿Hacemos otra vuelta?')) {
            this.jugar();
        } else {
            alert('Gracias por jugar');
        }
    }

    // Chequeo el valor
    comprobarValor = () => {
        let valor = prompt('Ingresa una opción para verificar si existe en el juego: ').toLowerCase();
        if (OPCION.includes(valor)) {
            alert('El valor: ' + valor + ' está incluído');
        } else {
            alert('El valor: ' + valor + ' no está incluído.');
        }
    }

    // itero sobre las opciones:
    iterarOpciones = () => {
        let continuarConsulta;
        do {
            let opcionesDisponibles = 'Las opciones disponibles en el juego son: ';
            for (let opcion of OPCION) {
                opcionesDisponibles += opcion + ', ';
            }
            opcionesDisponibles = opcionesDisponibles.slice(0, -2);
            alert(opcionesDisponibles);

            continuarConsulta = confirm('¿Deseas continuar consultando las opciones disponibles?');
            if(continuarConsulta) {
                this.comprobarValor();
            }
        } while (continuarConsulta);
    }
}

const juego = new JuegoPiedraPapelTijera();
juego.comprobarValor();
juego.iterarOpciones();
juego.jugar();