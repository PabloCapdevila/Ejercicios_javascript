var comprobar = document.getElementById("comprobar");

comprobar.onclick = function() {

    var numero = Number(
        document.getElementById("numero").value
    );

    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (numero == numeroAleatorio) {
        alert("¡Felicidades! Has acertado.");
    } else {
        alert("Has fallado.");
    }

};