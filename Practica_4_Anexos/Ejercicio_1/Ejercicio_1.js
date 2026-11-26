const mensaje = document.getElementById("mensaje");

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  const campos = formulario.querySelectorAll("input[type='text']");
  let vacio = false;

  campos.forEach(function (campo) {
    if (campo.value.trim() === "") {
      vacio = true;
    }
  });

  if (vacio) {
    evento.preventDefault();
    mensaje.textContent = "Hay campos vacíos.";
  } else {
    //mensaje.textContent = "Formulario enviado correctamente.";
    alert("Formulario enviado correctamente.");
  }
});