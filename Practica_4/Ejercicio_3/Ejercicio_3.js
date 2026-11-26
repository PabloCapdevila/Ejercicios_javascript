function cambiarTamano(e) {

//  var e = evento || window.event;
//  var elemento = e.target || e.srcElement;

  if (e.type == "mouseover") {
    this.style.fontSize = "16pt";
  } else if (e.type == "mouseout") {
    this.style.fontSize = "12pt";
  }
}

window.onload = function () {
  var texto = document.getElementById("texto");
  texto.onmouseover = cambiarTamano;
  texto.onmouseout = cambiarTamano;
};