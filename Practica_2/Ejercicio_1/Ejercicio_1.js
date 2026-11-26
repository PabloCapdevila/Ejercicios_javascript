function calcular() {

    let precio = Number(document.getElementById("precio").value);

    let iva = precio * 0.21;

    let total = precio + iva;

    
    document.getElementById("resultado").innerHTML =
        "IVA: " + iva.toFixed(2) + " €<br>" +
        "Precio total: " + total.toFixed(2) + " €";
}