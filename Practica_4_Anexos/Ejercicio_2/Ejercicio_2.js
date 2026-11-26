const enlace = document.getElementById("enlace");
const mensaje = document.getElementById("mensaje");


enlace.addEventListener("click", function (evento) {
  evento.preventDefault();
  mensaje.textContent = "El enlace no te lleva a ningún sitio.";
});