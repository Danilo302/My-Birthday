AOS.init();


let ano = new Date().getFullYear();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    let dataDoEvento = new Date(`Dec 12, ${ano} 19:00:00`);
    let timeStampDoEvento = dataDoEvento.getTime();

    const timeStampAtual = agora.getTime();

    if (timeStampDoEvento < timeStampAtual) {
        ano += 1;
        dataDoEvento = new Date(`Dec 12, ${ano} 19:00:00`);
        timeStampDoEvento = dataDoEvento.getTime();
    }

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS) / 1000);

    document.getElementById('contador').innerHTML =
        `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);
