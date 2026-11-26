document.getElementById("url").innerHTML =
    "URL: " + location.href;

document.getElementById("pathname").innerHTML =
    "Pathname: " + location.pathname;

document.getElementById("protocolo").innerHTML =
    "Protocolo: " + location.protocol;

function google() {
    location.href = "https://www.google.com";
}