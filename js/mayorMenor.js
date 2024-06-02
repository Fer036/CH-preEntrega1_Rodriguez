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

// Esta función genera un número aleatorio:
function generarNumeroAleatorio() {
    return Math.round(Math.random() * (NUMERO_MAYOR - NUMERO_MENOR + 1)) + NUMERO_MENOR;
}

while (continuar) {
    let victorias = 0;
    let perdidas = 0;
    // Array vacío para almacenar los resultados:
    let resultadoRondas = [];

    for (let i = 1; i <= RONDAS; i++) {
        // Genero el número aleatorio:
        numeroActual = generarNumeroAleatorio();
        alert('Ronda: ' + i + '. Número aleatorio: ' + numeroActual);

        // Pedirle que adivine si el próximo número será mayor o menor que el actual:
        eleccionUsuario = prompt('¿Mayor o menor?').toLowerCase();

        // Validar lo que ingresa el usuario:
        while (eleccionUsuario !== 'mayor' && eleccionUsuario !== 'menor') {
            eleccionUsuario = prompt('Ingrese un dato correcto - mayor o menor').toLowerCase();
        }

        // Muestro el número:
        siguienteNumero = generarNumeroAleatorio();
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
            resultadoRondas.push('Victoria');
        } else if (resultado === 'igual') {
            alert('Cuack, eran el mismo. Penal para talleres.');
            resultadoRondas.push('Empate');
        } else {
            alert('Seguí participando');
            perdidas++;
            rachasGanadas = 0;
            rachasPerdidas++;
            resultadoRondas.push('Perdida');
        }
    }

    // Muestro el global:
    alert('Resultados: Adivinaste: ' + victorias + ' Perdiste: ' + perdidas);
    alert('Mejor racha: ' + rachasGanadas + ' Peor racha: ' + rachasPerdidas);

    // Muestro el resultado de las rondas:
    alert('Resultado rondas: ' + resultadoRondas.join(', '));

    // Preguntar si quiere volver a jugar:
    continuar = confirm('¿Jugamos otro o arrugas?');
    if (!continuar) {
        alert('Bye bye');
    }
}