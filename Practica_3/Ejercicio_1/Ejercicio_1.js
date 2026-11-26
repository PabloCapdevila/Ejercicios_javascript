const divisor = document.getElementById("divisor");

document.getElementById("anadir").onclick = function () {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("Párrafo añadido"));
    divisor.appendChild(p);
};

document.getElementById("insertar").onclick = function () {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("Párrafo insertado"));
    divisor.insertBefore(p, divisor.firstElementChild.nextElementSibling);
};

document.getElementById("reemplazar").onclick = function () {
    const p = divisor.firstElementChild.nextElementSibling;

    if (p) {
        p.textContent = "Párrafo reemplazado";
    }
};

document.getElementById("borrar").onclick = function () {
    const p = divisor.firstElementChild.nextElementSibling;

    if (p) {
        divisor.removeChild(p);
    }
};

document.getElementById("clonar").onclick = function () {
    const clon = divisor.cloneNode(true);
    clon.removeAttribute("id");
    divisor.parentNode.insertBefore(clon, divisor.nextSibling);
};
