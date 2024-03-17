const contagem = document.querySelector(".contagem")

function iniciar() {
    let centesimos = 0
    let segundos = 0
    let minutos = 0
    let horas = 0
    
    setInterval(() => {
        centesimos++

        if (centesimos == 100) {
            centesimos = 0
            segundos++
        }

        if (segundos == 60) {
            segundos = 0
            minutos++
        }

        if (minutos == 60) {
            minutos = 0
            horas++
        }

        let horasFormatadas = horas.toString().padStart(2, "0");
        let minutosFormatados = minutos.toString().padStart(2, "0");
        let segundosFormatados = segundos.toString().padStart(2, "0");
        let centesimosFormatados = centesimos.toString().padStart(2, "0");

        contagem.value = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}.${centesimosFormatados}`;

    }, 10);
}