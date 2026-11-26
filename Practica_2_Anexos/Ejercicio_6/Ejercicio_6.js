var calcular = document.getElementById("calcular");

calcular.onclick = function() {
    var cadena = "2+2";
    var resultado = eval(cadena);
    document.getElementById("resultado").innerHTML =
        "El resultado es: " + resultado;
};