function validarAficion() {
    let lista = document.getElementById("aficiones");
    let longitud = lista.options.length;
    let indice = lista.selectedIndex;
    let valor = lista.options[indice].value;

    alert(
        "La longitud de la lista es " + longitud + "\n" +
        "El índice seleccionado es el " + indice + "\n" +
        "El valor del índice seleccionado es " + valor
    );
}

function validar(evento) {
    let dni = document.getElementById("dni").value.trim();
    let telefono = document.getElementById("telefono").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    
    if(dni == ""){
        evento.preventDefault();
        alert("Envio cancelado. Debes rellenar el campo DNI.")
    }else if (!/^\d{9}$/.test(telefono)){
        evento.preventDefault();
        alert("Envio cancelado. El campo telefono debe tener 9 digitos. Sin espacios ni guiones")
    }else{
        alert("Envio realizado correctamente")
    }

}

function validarObservaciones(evento) {
    let observaciones = document.getElementById("observaciones").value;
    if(observaciones.length > 150){
        evento.preventDefault();
    }
}

window.onload = function () {
    let nombre = document.getElementById("nombre");
    let observaciones = document.getElementById("observaciones");
    let aficiones = document.getElementById("aficiones");
    let formulario = document.getElementById("formulario");
    
    nombre.focus();
    observaciones.addEventListener("keypress", validarObservaciones);
    aficiones.addEventListener("change", validarAficion);
    formulario.addEventListener("submit", validar);
    
}
