/*function anadirEvento(elemento, tipo, funcion) {

  if (elemento.addEventListener) {
    elemento.addEventListener(tipo, funcion, false);

  } else if (elemento.attachEvent) {
    elemento.attachEvent("on" + tipo, funcion);
  }
}




function cambiarTamano(evento) {
  var e = evento || window.event;

  var elemento = e.target || e.srcElement;

  if (e.type == "mouseover") {
    elemento.style.fontSize = "16pt";
  } else {
    elemento.style.fontSize = "12pt";
  }
}




function iniciar() {
  var texto = document.getElementById("texto");
  anadirEvento(texto, "mouseover", cambiarTamano);
  anadirEvento(texto, "mouseout", cambiarTamano);
}

anadirEvento(window, "load", iniciar);*/

window.onload = function () {
  var texto = document.getElementById("texto");
  texto.addEventListener("mouseover", agrandar);
  texto.addEventListener("mouseout", reducir);
};

function agrandar() {
  this.style.fontSize = "16pt";
}

function reducir() {
  this.style.fontSize = "12pt";
}