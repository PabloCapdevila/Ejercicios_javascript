document.addEventListener("DOMContentLoaded", function () {
  const campoTexto = document.getElementById("campoTexto");
  const Sumar = document.getElementById("Sumar");
  const Inicializar = document.getElementById("Inicializar");


  Sumar.addEventListener("click", function () {
    let valorActual = parseInt(campoTexto.value, 10);
    campoTexto.value = valorActual + 10;
  });

  Inicializar.addEventListener("click", function () {
    campoTexto.value = 0;
  });
});