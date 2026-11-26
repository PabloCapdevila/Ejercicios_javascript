document.getElementById("imagenes").onclick = function () {
    const imagenes = document.getElementsByTagName("img");
    alert("Número de imágenes: " + imagenes.length);
};

document.getElementById("enlaces").onclick = function () {
    const enlaces = document.getElementsByTagName("a");
    alert("Número de enlaces: " + enlaces.length);
};
