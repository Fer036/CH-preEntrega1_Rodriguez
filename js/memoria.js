const NUMEROS = 3;
const DIGITOS = 4;

let continuar = true;

function memoriaNumeros() {
    while (continuar) {
        let victorias = 0;
        let perdidas = 0;

        // Genero los numeros como strings
        for (let i = 1; i <= NUMEROS; i++) {
            let secuencia = '';
            for (let j = 0; j < DIGITOS; j++) {
                secuencia += Math.floor(Math.random() * 10).toString();
            }

            alert('Ronda: ' + i + '.' + 'Secuencia: ' + secuencia);
            
            const RESPUESTA = prompt('Ingresá la secuencia: ');

            if (RESPUESTA === secuencia) {
                alert('Excelente, amigx!');
                victorias++;
            } else {
                alert('¿Y Candela? ¿Y la moto? La secuencia era: ' + secuencia);
                perdidas++;
            }
        }

        alert('Le pegaste a: ' + victorias + 'Le erraste a: ' + perdidas);

        continuar = confirm('¿Vamos de nuevo?');
        if (!continuar) {
            alert('Okey, se vemos');
        }
    }
}

memoriaNumeros()
