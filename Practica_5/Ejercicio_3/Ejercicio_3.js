window.onload = function () {
    color();
};

function color() {
    var radios = document.getElementsByName("colores");
    var parrafo = document.getElementById("parrafo");
    var opcion = "";

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            opcion = radios[i].value;
            break;
        }
    }

    var color;
    switch (opcion) {
        case "verde":
            color = "green";
            break;
        case "azul":
            color = "blue";
            break;
        case "rojo":
            color = "red";
            break;
    }

    parrafo.style.color = color;
}