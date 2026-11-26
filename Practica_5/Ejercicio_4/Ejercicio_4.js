window.onload = function () {
    estilo();
};

function estilo() {
    let parrafo = document.getElementById("parrafo");
    let negrita = document.getElementById("negrita");
    let cursiva = document.getElementById("cursiva");

    if (negrita.checked) {
        parrafo.style.fontWeight = "bold";
    } else {
        parrafo.style.fontWeight = "normal";
    }

    if (cursiva.checked) {
        parrafo.style.fontStyle = "italic";
    } else {
        parrafo.style.fontStyle = "normal";
    }
}