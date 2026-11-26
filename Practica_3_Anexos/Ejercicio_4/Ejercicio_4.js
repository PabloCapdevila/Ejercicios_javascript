document.addEventListener("DOMContentLoaded", function () {
  const NumEnlaces = document.getElementById("NumEnlaces");
  const RefEnlaces = document.getElementById("RefEnlaces");
  const RefEnlacesParrafo = document.getElementById("RefEnlacesParrafo");
  const ParrafosVerdes = document.getElementById("ParrafosVerdes");
  const DesactivarColor = document.getElementById("DesactivarColor");
  const resultado = document.getElementById("resultado");

  NumEnlaces.addEventListener("click", function () {
    const todosLosEnlaces = document.getElementsByTagName("a");
    resultado.innerHTML = `Número total de enlaces: ${todosLosEnlaces.length}`;
  });

  RefEnlaces.addEventListener("click", function () {
    const todosLosEnlaces = document.getElementsByTagName("a");
    let html = "Referencia de todos los enlaces:<ul>";
    for (let i = 0; i < todosLosEnlaces.length; i++) {
      html += `<li>${todosLosEnlaces[i].getAttribute("href")}</li>`;
    }
    html += "</ul>";
    resultado.innerHTML = html;
  });

  RefEnlacesParrafo.addEventListener("click", function () {
    const parrafos = document.querySelectorAll("#contenedorParrafos p");
    let html = "Referencia de enlaces por párrafo:";
    for (let i = 0; i < parrafos.length; i++) {
      const enlaces = parrafos[i].getElementsByTagName("a");
      html += `<p>Párrafo ${i + 1}:</p><ul>`;
      for (let j = 0; j < enlaces.length; j++) {
        html += `<li>${enlaces[j].getAttribute("href")}</li>`;
      }
      html += "</ul>";
    }
    resultado.innerHTML = html;
  });






  ParrafosVerdes.addEventListener("click", function () {
    const parrafos = document.querySelectorAll("#contenedorParrafos p");
    parrafos.forEach(function (parrafo) {
      parrafo.style.color = "green";
    });
  });


  DesactivarColor.addEventListener("click", function () {
    const parrafos = document.querySelectorAll("#contenedorParrafos p");
    parrafos.forEach(function (parrafo) {
      parrafo.style.color = "";
    });
  });
});