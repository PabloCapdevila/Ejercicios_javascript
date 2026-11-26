window.onload = function () {
  var texto = document.getElementById("texto");
  texto.onmouseover = agrandar;
  texto.onmouseout = reducir;
};

function agrandar() {
  this.style.fontSize = "16pt";
}

function reducir() {
  this.style.fontSize = "12pt";
}

