function horaActual() {

    let fecha = new Date();

    let hora = fecha.getHours();
    
    let minutos = fecha.getMinutes();

    let saludo;

    if (hora < 14) {
        saludo = "Buenos días";
    } else if (hora < 20) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    document.getElementById("hora").innerHTML =
        saludo + ", son las " + hora + ":" + minutos + " horas";
}