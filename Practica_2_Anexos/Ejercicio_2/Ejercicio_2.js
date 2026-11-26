var formulario = document.getElementById("formulario");

formulario.onsubmit = function() {

    var dni = document.getElementById("dni").value;

    if (dni == "") {
        alert("El campo DNI no tiene datos.");
        return false;
    }else if (dni.length != 9 || isNaN(dni.substring(0, 8)) || !isNaN(dni.charAt(8))) {
        alert("El DNI debe tener 8 números y una letra.");
        return false;
    }else {
        alert("Datos correctamente introducidos")
    }

};