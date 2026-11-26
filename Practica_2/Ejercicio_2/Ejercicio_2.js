function estacion() {
    
    let mes = document.getElementById("mes").value.toLowerCase();
    let resultado = "";

    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            resultado = "Estamos en Invierno";
            break;

        case "marzo":
        case "abril":
        case "mayo":
            resultado = "Estamos en Primavera";
            break;

        case "junio":
        case "julio":
        case "agosto":
            resultado = "Estamos en Verano";
            break;

        case "septiembre":
        case "octubre":
        case "noviembre":
            resultado = "Estamos en Otoño";
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}