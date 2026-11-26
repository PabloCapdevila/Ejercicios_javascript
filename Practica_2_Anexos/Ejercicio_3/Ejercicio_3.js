var numero = document.getElementById("numero");
var sumar = document.getElementById("sumar");
var inicializar = document.getElementById("inicializar");


sumar.onclick = function() {
    numero.value = Number(numero.value) + 10;
};


inicializar.onclick = function() {
    numero.value = 0;
};