const contagem = document.querySelector(".contagem")
let cron
let segundos = 0
let minutos = 0
let horas = 0

function iniciar() {
    cron = setInterval(() => {

        segundos++

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

        contagem.value = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;

    }, 1000);
}

function parar() {
    clearInterval(cron)
}

function zerar() {
    segundos = 0
    minutos = 0
    horas = 0
    contagem.value = "00:00:00"
}

function voltas() {
    
}