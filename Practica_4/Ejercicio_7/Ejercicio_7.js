function dosDigitos(n) {
  return n < 10 ? "0" + n : n;
}

function mostrarReloj() {
  var ahora = new Date();
  var hora = dosDigitos(ahora.getHours());
  var minutos = dosDigitos(ahora.getMinutes());
  var segundos = dosDigitos(ahora.getSeconds());

  document.getElementById("reloj").innerHTML =
    hora + ":" + minutos + ":" + segundos;
}

window.onload = function () {
  alert("Página que contiene un reloj digital");
  mostrarReloj();
  setInterval(mostrarReloj, 1000);


  var enlace = document.getElementById("enlaceSalir");
  if (enlace) {
    enlace.addEventListener("click", function (e) {

      e.preventDefault();
      
      alert("Página cancelada");
      
      window.location.href = "https://www.google.com";
    });
  }
};