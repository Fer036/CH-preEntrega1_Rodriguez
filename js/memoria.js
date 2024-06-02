const NUMEROS = 3;
const DIGITOS = 4;

let continuar = true;

// Genero la secuencia aleatoria:
const generarSecuenciaAleatoria = () => {
    let secuencia = '';
    for (let j = 0; j < DIGITOS; j++) {
        secuencia += Math.floor(Math.random() * 10).toString();
    }

    return secuencia;
}


while (continuar) {
    let victorias = 0;
    let perdidas = 0;
    let reresultadoRondas = [];

    // Genero los numeros como strings:
    for (let i = 1; i <= NUMEROS; i++) {
        const secuencia = generarSecuenciaAleatoria();
        alert('Ronda: ' + i + ' Secuencia: ' + secuencia);

        let respuesta = prompt('Ingresá la secuencia: ');

        // Valido si es un valor correcto lo que ingresa:
        while (respuesta.length !== DIGITOS || isNaN(respuesta)) {
            respuesta = prompt('Apa, ingresaste cualquier cosa. Ingresá una secuencia de 4 dígitos');
        }

        // Corroboro si gana o pierde:
        if (respuesta === secuencia) {
            alert('Excelente, amigx!');
            victorias++;
        } else {
            alert('¿Y Candela? ¿Y la moto? La secuencia era: ' + secuencia);
            perdidas++;
        }

        // Almaceno en el array los resultados:
        reresultadoRondas.push({
            ronda: i,
            secuencia: secuencia,
            respuesta: respuesta
        });
    }

    // Muestro resultados: 
    alert('Le pegaste a: ' + victorias + 'Le erraste a: ' + perdidas);

    reresultadoRondas.forEach(ronda => {
        alert(`Ronda ${ronda.ronda}: Secuencia ${ronda.secuencia}: Respuesta ${ronda.respuesta}`);
    })

    continuar = confirm('¿Vamos de nuevo?');
    if (!continuar) {
        alert('Okey, se vemos');
    }
}
