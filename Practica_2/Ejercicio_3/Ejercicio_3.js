document.getElementById("plataforma").innerHTML =
    "Plataforma: " + navigator.platform;

let continuar = confirm("¿Quieres continuar?");

if (continuar) {
    document.getElementById("mensaje").innerHTML = "continuamos...";
}