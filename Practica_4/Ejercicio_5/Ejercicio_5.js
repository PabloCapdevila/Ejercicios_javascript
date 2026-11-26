function soloNumeros(e) {

  var codigo = e.keyCode;

  if (codigo < 48 || codigo > 57) {
    e.preventDefault();
  }

}

window.onload = function () {
  document.getElementById("numero").onkeypress = soloNumeros;
};