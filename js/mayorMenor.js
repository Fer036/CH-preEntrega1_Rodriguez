const NUMERO_MENOR = 1;
const NUMERO_MAYOR = 12;
const RONDAS = 3;

let numeroActual;
let eleccionUsuario;
let siguienteNumero;

let rachasGanadas = 0;
let rachasPerdidas = 0;

let resultado;
let continuar = true;

function juegoMayMen() {
    while (continuar) {
        let victorias = 0;
        let perdidas = 0;

        for (let i = 1; i <= RONDAS; i++) {
            // Genero el número aleatorio:
            numeroActual = Math.floor(Math.random() * NUMERO_MAYOR) + NUMERO_MENOR;
            alert('Ronda: ' + i + '. Número aleatorio: ' + numeroActual);

            // Pedirle que adivine si el próximo número será mayor o menor que el actual:
            eleccionUsuario = prompt('¿Mayor o menor?').toLowerCase();

            // Validar lo que ingresa el usuario:
            while (eleccionUsuario !== 'mayor' && eleccionUsuario !== 'menor') {
                eleccionUsuario = prompt('Ingrese un dato correcto - mayor o menor').toLowerCase();
            }

            // Muestro el número:
            siguienteNumero = Math.floor(Math.random() * NUMERO_MAYOR) + NUMERO_MENOR;
            alert('El número es: ' + siguienteNumero);

            // Resultado:
            if (siguienteNumero > numeroActual) {
                resultado = 'mayor';
            } else if (siguienteNumero < numeroActual) {
                resultado = 'menor';
            } else {
                resultado = 'igual';
            }

            // Muestro el resultado de la ronda:
            if (resultado === eleccionUsuario) {
                alert('¡Excelente, Akinator! Le pegaste!');
                victorias++;
                rachasPerdidas = 0;
                rachasGanadas++;
            } else if (resultado === 'igual') {
                alert('Cuack, eran el mismo. Penal para talleres.');
            } else {
                alert('Seguí participando');
                perdidas++;
                rachasGanadas = 0;
                rachasPerdidas++;
            }
        }

        // Muestro el global:
        alert('Resultados: Adivinaste: ' + victorias + ' Perdiste: ' + perdidas);
        alert('Mejor racha: ' + rachasGanadas + ' Peor racha: ' + rachasPerdidas);

        // Preguntar si quiere volver a jugar:
        continuar = confirm('¿Jugamos otro o arrugas?');
        if (!continuar) {
            alert('Bye bye');
        }
    }
}

juegoMayMen();