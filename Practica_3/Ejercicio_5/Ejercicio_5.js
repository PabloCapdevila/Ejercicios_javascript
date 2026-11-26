document.getElementById("crear").onclick = function () {
    const caja = document.createElement("input");

    caja.setAttribute("type", "text");
    caja.setAttribute("id", "nombre");
    caja.setAttribute("placeholder", "Escribe tu nombre");
    caja.setAttribute("maxlength", "30");
    caja.setAttribute("title", "Introduce tu nombre");

    document.getElementById("contenedor").appendChild(caja);
};
