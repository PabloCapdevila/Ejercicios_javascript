function mensaje() {
  alert("Has pulsado sobre un botón");
}

window.onload = function () {
  var botones = document.getElementsByTagName("button");
  for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = mensaje;
  }

  var inputs = document.getElementsByTagName("input");
  for (var j = 0; j < inputs.length; j++) {
    if (inputs[j].type == "button") {
      inputs[j].onclick = mensaje;
    }
  }
};