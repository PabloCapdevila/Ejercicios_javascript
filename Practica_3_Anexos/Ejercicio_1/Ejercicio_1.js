document.addEventListener("DOMContentLoaded", function () {
  const formDNI = document.getElementById("formDNI");
  const campoDni = document.getElementById("dni");

  formDNI.addEventListener("submit", function (evento) {
    
    const valorDni = campoDni.value.trim();

    if (valorDni === "") {
      alert("El campo no tiene datos");
    } else if (/^[0-9]{8}[A-Za-z]$/.test(valorDni)) {
      alert("Formulario enviado correctamente con el DNI: " + valorDni);
    } else {
      alert("DNI incorrecto");
      evento.preventDefault();
    }
  });
});