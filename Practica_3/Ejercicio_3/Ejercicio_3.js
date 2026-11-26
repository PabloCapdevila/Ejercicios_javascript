const zona = document.getElementById("zona");

document.getElementById("azul").onclick = function () {
    zona.style.backgroundColor = "blue";
};

document.getElementById("verde").onclick = function () {
    zona.style.backgroundColor = "green";
};

document.getElementById("restaurar").onclick = function () {
    zona.style.backgroundColor = "white";
};
